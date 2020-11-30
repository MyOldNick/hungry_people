//styles
import "./Header.scss";

//images
import Image from "../../images/Vector.svg";
import Timer from "../Timer/Timer";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


//constants
import {firstNav, nextNav} from '../../constants/Header'

const Header = () => {
  return (
    <div className="header">
      <Timer />
      <div className="container">
        <nav className="header__nav">
          <div className="header__nav-link-container">
            {firstNav.map(({ title, link }, index) => (
              <div key={index}>
                <a href={link} className="header__nav-link">
                  {title}
                </a>
              </div>
            ))}
          </div>
          <div className="header__nav-image-container">
            <img src={Image} alt="alt" className="header__nav-image" />
          </div>
          <div className="header__nav-link-container">
            {nextNav.map(({ title, link }, index) => (
              <div key={index}>
                <a href={link} className="header__nav-link">
                  {title}
                </a>
              </div>
            ))}
          </div>
        </nav>
        <div className="header__main-sector">
          <div>
            <p className="header__work-time">
              Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
            </p>
          </div>
          <div className="header__title">
            <p>RESTAURANT</p>
            <h1>hungry people</h1>
            <div className="header__button-container">
              <div className="header__yellow-button">BOOK TABLE</div>
              <div className="header__button">EXPLORE</div>
            </div>
            <div className="header__circle-button-container">
              <div className="header__cirlce-button">PRESS F</div>
            </div>
          </div>
          <div className="header__contacts">
            <div className="header__icon-container">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="header__icon-container">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="header__icon-container">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
