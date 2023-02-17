import "./style.scss";
export function TextLink(props) {
  const { link, text } = props;
  return (
    <a className="text-link" href={link} target="_blank">
      <p>{`${text}`}</p>
    </a>
  );
}

export function UnderlineGradientButton(props) {
  const { link, text, handleClick } = props;
  return (
    <div className="underline-button-gradient">
      <a href={link} target="_blank">
        <button onClick={() => handleClick()}>{text}</button>
      </a>
    </div>
  );
}

export function FullGradientButton(props) {
  const { link, text, handleClick, isDisabled } = props;
  return (
    <div className={`full-button-gradient${isDisabled ? " disabled" : ""}`}>
      <a href={link}>
        <button onClick={() => handleClick()}>{text}</button>
      </a>
    </div>
  );
}

export function GenericButton(props) {
  const { text, handleClick } = props;
  return (
    <div className="generic">
      <button onClick={() => handleClick()}>{text}</button>
    </div>
  );
}
