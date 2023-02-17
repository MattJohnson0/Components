import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.scss";
import T from "../Text";
import { ProfileImgMenu } from "../ProfileImg";
import { stripeLinkRequest, profileRequest } from "../APIRequests";
import LoginButton from "../Login";
import Hamburger from "../Hamburger";
import { List, MultiSelect } from "../Dropdown";
import Loading from "..//Loading";
import { useAccessTokenContext } from "../../context/AccessTokenContextProvider.js";
// import LogoutButton from "./../components/Logout";
// TODO: Once real logo is available, remove style property from img tag and make sure img is just sized properly in assets folder
// https://app.clickup.com/t/3jtj2bu
export default function NavBar(props) {
  const { customColor } = props;
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { accessToken } = useAccessTokenContext();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    isAuthenticated && profileRequest(user.sub, setProfile);
  }, [isAuthenticated]);

  const memberLinks = () => [
    {
      href: "",
      text: "Launch Member Portal",
    },
    {
      href: "https://www.facebook.com/groups/MOBAlliance",
      text: "Join Facebook Group",
    },
    {
      href: "https://www.linkedin.com/groups/14110245/",
      text: "Join LinkedIn Group",
    },
    {
      href: "https://discord.gg/wgZJfT29T8",
      text: "Join Discord Server",
    },
    {
      href: "https://forms.clickup.com/18042082/f/h6k72-3890/HQBQHF4CAYFBQ3IMT1",
      text: "Join Sub Reddit",
    },
    {
      href: "https://events.themobnation.com",
      text: "Launch Event Portal",
    },
  ];

  const userLinks = (profile) => {
    const { level, stripeID } = profile;
    const links = [
      {
        href: `/profile/${user.sub}`,
        text: "Profile",
      },
      {
        href: `/edit`,
        text: "Edit",
      },
      {
        href: null,
        text: "Update Billing Information",
        handleClick: () => {
          stripeLinkRequest(accessToken);
        },
      },
      {
        href: null,
        text: "Log Out",
        handleClick: () => logout({ returnTo: window.location.origin }),
      },
    ];

    return links
      .filter((link) => {
        return link.text !== "Update Billing Information" ? true : !!stripeID;
      })
      .filter((link) => {
        return link.text !== "Profile" ? true : !!(level < 4);
      });
  };

  const hamburgerLinks = (profile) => [
    {
      href: `/`,
      text: "Directory",
    },
    {
      href: `https://events.themobnation.com/`,
      text: "Events",
    },
    ...userLinks(profile),
    ...memberLinks(),
  ];

  return (
    <nav style={customColor ? { backgroundColor: customColor } : {}}>
      <img
        style={{ width: "clamp(11rem, 18vw, 22rem)" }}
        alt="mob nation logo"
        src={require("../../assets/images/moblogo.svg").default}
      ></img>
      {profile ? (
        <Hamburger
          nav={hamburgerLinks(profile)}
          memberLinks={memberLinks}
        ></Hamburger>
      ) : null}
      <T.MOBFont>
        <a href="/">DIRECTORY</a>
      </T.MOBFont>
      <T.MOBFont>
        <a href="https://events.themobnation.com/">EVENTS</a>
      </T.MOBFont>
      <div>
        <List links={memberLinks()}>
          <T.MOBFont>MEMBERS</T.MOBFont>
        </List>
      </div>
      <MultiSelect options={memberLinks()}></MultiSelect>
      <div className="menu-container">
        {isLoading ? (
          <Loading></Loading>
        ) : isAuthenticated ? (
          <ProfileMenu profile={profile} userLinks={userLinks}></ProfileMenu>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
}

const ProfileMenu = (props) => {
  const { profile, userLinks } = props;
  return profile ? (
    <div>
      <ProfileImgMenu
        src={profile.profilePhoto}
        links={userLinks(profile)}
      ></ProfileImgMenu>
    </div>
  ) : null;
};
