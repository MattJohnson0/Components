import ProfileImg from "../ProfileImg";
import { UnderlineGradientButton } from "../Buttons";

export function TierOne(props) {
  return <BaseTier {...props}></BaseTier>;
}

export function TierTwo(props) {
  return <BaseTier tier2="true" {...props}></BaseTier>;
}

export function TierThree(props) {
  return <VerticalInfo {...props}></VerticalInfo>;
}

function VerticalInfo(props) {
  const { ownerName, companyName, companyID, listingLogo } = props;
  return (
    <div className="vertical-info-gradient">
      <div className="vertical-info">
        {!props.tier2 && (
          <div className="profile-img-gradient">
            <ProfileImg src={listingLogo}></ProfileImg>
          </div>
        )}
        {ownerName ? <p className="owner">{ownerName}</p> : null}
        <p className="tagline">{companyName}</p>
        <UnderlineGradientButton
          link={`/listing/${companyID}`}
          text="VIEW LISTING"
        ></UnderlineGradientButton>
      </div>
    </div>
  );
}

function BaseTier(props) {
  const { className, tier2, listingLogo, listingCover } = props;
  return (
    <div
      className={`card ${className ? className : ""}`}
      style={{
        backgroundImage: `url(${listingCover})`,
      }}
    >
      {tier2 && (
        <div className="profile-img-gradient">
          <ProfileImg src={listingLogo}></ProfileImg>
        </div>
      )}
      <VerticalInfo {...props}></VerticalInfo>
    </div>
  );
}
