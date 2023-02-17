import "./style.scss";
export default function AboutMe(props) {
  const { hasButtons, title } = props;
  return (
    <section className="about">
      <p className="about-title">{title}</p>
      <div className="about-content">
        <div className="about-left">
          <div
            className="about-image"
            style={{
              backgroundImage: `url(${require("./DELETE_LATER_ASSETS/melissa.png")})`,
            }}
          ></div>
          {hasButtons && (
            <div className="about-buttons">
              <button>MESSAGE</button>
              <button>PROFILE</button>
            </div>
          )}
        </div>
        <div className="about-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Risus quis varius quam quisque id diam vel quam elementum. </p>
          <p>Faucibus a pellentesque sit amet porttitor eget dolor morbi. </p>
          <p>
            Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at
            augue.
          </p>
          <p>
            Odio pellentesque diam volutpat commodo sed egestas egestas
            fringilla.
          </p>
          <p>Diam in arcu cursus euismod quis viverra nibh cras pulvinar. </p>
        </div>
      </div>
    </section>
  );
}

export const About = (props) => {
  const { about, level } = props;

  return !!about && level < 4 ? (
    <section className="about-section">
      <p className="about-title">About Me</p>
      <p>{about}</p>
    </section>
  ) : null;
};
