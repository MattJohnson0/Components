import { memo } from "react";
import "./style.scss";
import { TierOne, TierTwo, TierThree } from "./tiers.js";
import { GridRowTwoColumn, GridRowThreeColumn } from "../Grids";

const AllTierOne = (props) => {
  const { name, companyID, memberData, listingLogo, listingCover } =
    props.company[0];
  return (
    <TierOne
      className="single-item-row"
      companyName={name}
      companyID={companyID}
      ownerName={!!memberData ? memberData[0].name : null}
      listingLogo={listingLogo}
      listingCover={listingCover}
    ></TierOne>
  );
};

const AllTierTwo = (props) => {
  const { companies } = props;
  const allTierTwoCards = [];
  let twoCards = [];
  companies.forEach((company, index) => {
    const { name, companyID, memberData, listingLogo, listingCover } = company;
    const isLastItem = companies.length - 1 === index;
    twoCards.push(
      <TierTwo
        key={index}
        companyName={name}
        companyID={companyID}
        ownerName={!!memberData ? memberData[0].name : null}
        listingLogo={listingLogo}
        listingCover={listingCover}
      ></TierTwo>
    );
    if (twoCards.length === 2 || isLastItem) {
      allTierTwoCards.push(
        <GridRowTwoColumn key={`twoColumn-${index}`}>
          {twoCards}
        </GridRowTwoColumn>
      );
      twoCards = [];
    }
  });
  return allTierTwoCards;
};

const AllTierThree = (props) => {
  const { companies } = props;
  const allTierThreeCards = [];
  let threeCards = [];
  companies.forEach((company, index) => {
    const { name, companyID, memberData, listingLogo, listingCover } = company;
    const isLastItem = companies.length - 1 === index;
    threeCards.push(
      <TierThree
        key={index}
        companyName={name}
        companyID={companyID}
        ownerName={!!memberData ? memberData[0].name : null}
        listingLogo={listingLogo}
        listingCover={listingCover}
      ></TierThree>
    );
    if (threeCards.length === 3 || isLastItem) {
      allTierThreeCards.push(
        <GridRowThreeColumn key={`threeColumn-${index}`}>
          {threeCards}
        </GridRowThreeColumn>
      );
      threeCards = [];
    }
  });
  return allTierThreeCards;
};

const sortCompanies = (companies, memberLevel) =>
  companies.reduce(
    (companiesEnum, company, index) => {
      const level = memberLevel ? memberLevel : company.memberData[0].level;
      if (index === 0) {
        companiesEnum["one"].push(company);
      } else if (level === 1 || level === 2 || level === 3) {
        companiesEnum["two"].push(company);
      } else {
        companiesEnum["three"].push(company);
      }
      return companiesEnum;
    },
    { one: [], two: [], three: [] }
  );

const Cards = memo((props) => {
  const { companies, memberLevel } = props;
  const { one, two, three } = sortCompanies(companies, memberLevel);
  const AllCards = () => (
    <div className="cards">
      {!!one.length ? <AllTierOne company={one}></AllTierOne> : null}
      {!!two.length ? <AllTierTwo companies={two}></AllTierTwo> : null}
      {!!three.length ? <AllTierThree companies={three}></AllTierThree> : null}
    </div>
  );
  return !!companies.length ? <AllCards></AllCards> : null;
});

export default Cards;
