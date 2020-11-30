//styles
import "./Form.scss";

//images
import AboutImage from "../../images/about-img.svg";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//constants
import { formArray } from "../../constants/Form";

const FormComponent = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="form__main">
          <h1 className="form__title">book a table</h1>
          <div className="form__input-container">
            {formArray.map(({ title, icon }, index) => (
              <div key={index}>
                <input
                  placeholder={title}
                  type="text"
                  className="form__input"
                />
                <div className="form__input-icon">
                  {icon && <FontAwesomeIcon icon={faAngleDown} />}
                </div>
              </div>
            ))}
            <div className="form__input-button">book now</div>
          </div>
        </div>
        <div className="form__image">
          <img src={AboutImage} alt="about" />
        </div>
        <p className="form__work-time">
          Mon - Fri: <strong>8PM - 10PM</strong>, Sat - Sun:{" "}
          <strong>8PM - 3AM</strong>, Phone:{" "}
          <strong>+40 729 131 637/+40 726 458 782</strong>
        </p>
      </div>
    </div>
  );
};

export default FormComponent;
