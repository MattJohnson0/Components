import "./style.scss";

const photoEnum = {
  facebook: require("../../assets/socialIcons/facebook.svg").default,
  linkedin: require("../../assets/socialIcons/linkedin.svg").default,
  instagram: require("../../assets/socialIcons/instagram.svg").default,
  tiktok: require("../../assets/socialIcons/tiktok.svg").default,
  pinterest: require("../../assets/socialIcons/pinterest.svg").default,
  twitter: require("../../assets/socialIcons/twitter.svg").default,
  yelp: require("../../assets/socialIcons/yelp.svg").default,
  youtube: require("../../assets/socialIcons/youtube.svg").default,
  podcast: require("../../assets/socialIcons/podcast.svg").default,
};

export function SocialMedia(props) {
  const { socialLinks } = props;

  const filteredSocialLinks = socialLinks.filter(
    (social) => !!photoEnum[social.code] && social.link
  );

  const socialMedia = filteredSocialLinks.map((social, index) => {
    const { link, code } = social;
    return (
      <a key={index} href={link}>
        <img src={photoEnum[code]}></img>
      </a>
    );
  });

  return <div className="all-social-media">{socialMedia}</div>;
}

const MOBLinks = [
  { code: "facebook", link: "https://www.facebook.com/wearemobnation" },
  { code: "instagram", link: "https://www.instagram.com/the.mobnation/" },
  { code: "tiktok", link: "https://www.tiktok.com/@the.mobnation" },
  { code: "pinterest", link: "https://www.pinterest.com/themobnation/" },
  { code: "linkedin", link: "https://www.linkedin.com/company/themobnation/" },
];

export function MOBSocialMedia() {
  return <SocialMedia socialLinks={MOBLinks}></SocialMedia>;
}
