export default function ProfileLink(props) {
  const { children, ownerID, level } = props;
  return level < 5 ? <a href={`/profile/${ownerID}`} target="_blank">{children}</a> : children;
}
