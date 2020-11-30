//styles
import "./Menu.scss";

//constants
import { menuCategories } from "../../constants/Menu";

const Menu = () => {
  const array = new Array(21).fill("");
  return (
    <div className="menu">
      <div className="container">
        <p className="menu__title">DELICIOUS MENU</p>
        <p className="menu__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>
        <div className="menu__categories-container">
          {menuCategories.map(({ title }, index) => (
            <div key={index}>
              <p className="menu__categories-text">{title}</p>
              {index === menuCategories.length - 1 ? undefined : (
                <div className="menu__categories-line"></div>
              )}
            </div>
          ))}
        </div>
        <div className="menu__positions-container">
          {array.map((el, index) => (
            <div key={index}>
              <p className="menu__position-title">
                PIZZA QUATRO STAGIONI . . . . 55,68 USD
              </p>
              <p className="menu__position-subtitle">
                Integer ullamcorper neque eu purus euismod
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
