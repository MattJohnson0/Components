import "./style.scss";
export default function Gallery() {
  return (
    <section className="gallery">
      <GalleryImage
        src={`${require("./DELETE_LATER_ASSETS/melissa.png")}`}
      ></GalleryImage>
      <GalleryImage
        src={`${require("./DELETE_LATER_ASSETS/melissa.png")}`}
      ></GalleryImage>
      <GalleryImage
        src={`${require("./DELETE_LATER_ASSETS/melissa.png")}`}
      ></GalleryImage>
      <GalleryImage
        src={`${require("./DELETE_LATER_ASSETS/melissa.png")}`}
      ></GalleryImage>
    </section>
  );
}

function GalleryImage(props) {
  return (
    <div
      className="gallery-image"
      style={{
        backgroundImage: `url(${props.src})`,
      }}
    ></div>
  );
}
