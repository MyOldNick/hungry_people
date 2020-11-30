//styles
import './Loader.scss'

//images
import Image from "../../images/Vector.svg";

const Loader = () => {
  return (
    <div className="load">
      <img className="load__image" src={Image} alt="logo" />
    </div>
  );
};

export default Loader
