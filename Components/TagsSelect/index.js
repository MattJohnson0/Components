import "./style.scss";
export default function TagsSelect(props) {
  const { tags, selected, handleSelect, title, fieldName } = props;
  const localSelected = [...selected];

  const isCategoryTags =
    tags && Object.keys(tags[0]).indexOf("categoryName") >= 0;

  const isChecked = (id) => {
    return localSelected && localSelected.indexOf(id) >= 0;
  };

  const updateSelected = (tagId) => {
    const arrayElem = localSelected.indexOf(tagId);
    isChecked(tagId)
      ? localSelected.splice(arrayElem, 1)
      : localSelected.push(tagId);
    handleSelect(isCategoryTags ? "categories" : "ownerTags", localSelected);
  };

  return tags ? (
    <div className="field">
      <p>{title}</p>
      <div className="tags">
        {tags.map((tag, index) => {
          const { _id } = tag;
          return (
            <div key={index}>
              <input
                type="radio"
                id={_id}
                checked={isChecked(_id) ? "checked" : ""}
                onChange={() => updateSelected(_id)}
              />
              <label>{tags[index][fieldName]}</label>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}
