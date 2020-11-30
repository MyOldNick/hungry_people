import { useState, useEffect } from "react";
//styles
import "./App.scss";

//components
import Main from './components/Main/Main'
import Loader from './components/Loader/Loader'


const App = () => {
  const [isLoad, setIsLoad] = useState(false);
  //псевдопреоадер, функций своих не выполняет, но сделал чтобы было :3
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 2000);
  }, [isLoad]);

  return (
    <div className="overflow-hidden">
      {isLoad ? (
        <Main/>
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default App;
