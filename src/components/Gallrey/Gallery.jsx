//styles
import "./Gallery.scss";

//images
import Image from "../../images/Gallery1.png";
import ImageTwo from "../../images/Gallery2.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__line-container">
          <div className="gallery__line slider__line-left"></div>
          <div className="gallery__line slider__line-center"></div>
          <div className="gallery__line slider__line-right"></div>
        </div>
        <p className="gallery__title">PRIVATE EVENTS</p>
        <div className="gallery__images-container">
          <div className="gallery__first-image">
            <img src={Image} alt="123" />
          </div>
          <div className="gallery__second-image">
            <img src={ImageTwo} alt="23" />
          </div>
        </div>
        <p className="gallery__contacts">
          For private events please call:{" "}
          <strong>+40 729 131 637/+40 726 458 782</strong> or use the contact
          form.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
