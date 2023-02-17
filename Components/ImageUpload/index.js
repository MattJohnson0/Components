import { useState } from "react";
export function ImageUpload(props) {
  const [newPhoto, setNewPhoto] = useState(null);
  const { currentPhoto, handleChange, title, fieldName } = props;
  return (
    <div className="field">
      <p>{title}</p>
      <div
        style={{
          backgroundImage: `url(${newPhoto ? newPhoto : currentPhoto})`,
        }}
        className="photo-container"
      ></div>
      <input
        type="file"
        name="fieldName"
        accept="image/png, image/jpeg"
        onChange={(event) => {
          const image = event.target.files[0];
          handleChange(fieldName, image);
          setNewPhoto(URL.createObjectURL(image));
        }}
      />
      <p className="file-limit">Max file size 10MB</p>
    </div>
  );
}
