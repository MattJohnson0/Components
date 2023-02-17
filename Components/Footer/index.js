import "./style.scss";
import T from "../Text";
import { MOBSocialMedia } from "../SocialIcons";
export default function Footer() {
  //TODO: Once real logo is available, remove style property from img tag and make sure img is just sized properly in assets folder
  // https://app.clickup.com/t/3jtj2bu
  return (
    <footer>
      <div className="one mob-spacing">
        <div className="mob-container">
          <img
            alt="mob nation logo"
            src={require("../../assets/images/moblogo.svg").default}
          ></img>
          <MOBSocialMedia></MOBSocialMedia>
        </div>
      </div>
      <div>
        <T.MOBFont>MEMBERS ONLY</T.MOBFont>
        <p>
          <a href="">Launch Member Portal</a>
        </p>
        <p>
          <a href="https://www.facebook.com/groups/MOBAlliance" target="_blank">
            Join Facebook Group
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/groups/14110245/">
            Join LinkedIn Group
          </a>
        </p>
        <p>
          <a href="https://discord.gg/wgZJfT29T8">Join Discord Server</a>
        </p>
        <p>
          <a href="https://forms.clickup.com/18042082/f/h6k72-3890/HQBQHF4CAYFBQ3IMT1">
            Join Sub Reddit
          </a>
        </p>
        <p>
          <a href="https://events.themobnation.com">Launch Event Portal</a>
        </p>
      </div>
      <div>
        <T.MOBFont>For All MOBs</T.MOBFont>
        <p>
          <a href="https://forms.clickup.com/18042082/f/h6k72-3860/IZFVFHROL7HOFXF7RX">
            Create Your Free Listing
          </a>
        </p>
        <p>
          <a href="https://forms.clickup.com/18042082/f/h6k72-3900/3ITFWHF0ZIUMXHSHZI">
            Submit Info For Another MOB
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/groups/themobnw" target="_blank">
            Join Free Facebook Group
          </a>
        </p>
        <p>
          <a href="https://themobnation.com/join">Join The MOB Nation</a>
        </p>
        <p>
          <a href="https://themobnation.com/contact">Contact Us</a>
        </p>
        <p>
          <a href="https://events.themobnation.com/">Event Calendar</a>
        </p>
      </div>
      <div>
        <T.MOBFont>COMPANY LINKS</T.MOBFont>
        <p>
          <a href="https://themobnation.com/about">About</a>
        </p>
        <p>
          <a href="/">View MOB Directory</a>
        </p>
        <p>
          <a href="https://themobnation.com/join">Join The MOB Nation</a>
        </p>
        <p>
          <a href="https://themobnation.com/contact">Contact Us</a>
        </p>
        <p>
          <a href="https://events.themobnation.com/">Event Calendar</a>
        </p>
        <p>
          <a href="https://themobnation.com/shop">Shop The MOB</a>
        </p>
      </div>
    </footer>
  );
}
