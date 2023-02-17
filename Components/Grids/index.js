import "./style.scss";
import { addClasses } from "../../utils";

export function GridRowThreeColumn(props) {
  return (
    <div className={`triple-item-row${addClasses(props)}`}>
      {props.children}
    </div>
  );
}

export function GridRowTwoColumn(props) {
  return (
    <div className={`double-item-row${addClasses(props)}`}>
      {props.children}
    </div>
  );
}

export function GridItemOne(props) {
  return <div className="one">{props.children}</div>;
}

export function GridItemTwo(props) {
  return <div className="two">{props.children}</div>;
}

export function GridItemThree(props) {
  return <div className="three">{props.children}</div>;
}
