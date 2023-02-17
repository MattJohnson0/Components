import "./style.scss";
export default function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${props.src})`,
      }}
    ></div>
  );
}
