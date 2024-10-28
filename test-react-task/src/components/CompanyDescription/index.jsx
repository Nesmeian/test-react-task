import "./style.css";
import descriptionTextData from "./textData";
import descriptionImg from "..//../assets/description-img.jpg";
export default function Description() {
  return (
    <section className="description__wrapper">
      <div className="description__image-container">
        <img
          className="description__image"
          src={descriptionImg}
          alt="description image"
        ></img>
      </div>
      <div className="description__text_container">
        <h2 className="description__text_title">Welcome to Art of Style</h2>
        <p className="description__text">{descriptionTextData}</p>
      </div>
    </section>
  );
}
