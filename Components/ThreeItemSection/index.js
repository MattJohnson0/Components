import "./style.scss";
import {
  GridRowThreeColumn,
  GridItemOne,
  GridItemTwo,
  GridItemThree,
} from "../Grids";
import { addClasses } from "../../utils";

export default function ThreeItemSection(props) {
  const { children, title } = props;
  return (
    <section className={`three-item-section${addClasses(props)}`}>
      <div className="title">
        <p>{title}</p>
      </div>
      <GridRowThreeColumn>
        {children ? (
          children
        ) : (
          <>
            <GridItemOne>
              <div className="item"></div>
            </GridItemOne>
            <GridItemTwo>
              <div className="item"></div>
            </GridItemTwo>
            <GridItemThree>
              <div className="item"></div>
            </GridItemThree>
          </>
        )}
      </GridRowThreeColumn>
    </section>
  );
}
