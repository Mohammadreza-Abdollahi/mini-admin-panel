import { useState } from "react";
import Aside from "./aside";
import Content from "./content";
import style from "./style.module.css";
import { MainContext } from "./context/mainContext";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (  
    <>
      <section className={`${style.main_sec}`}>
        <BrowserRouter>
          <MainContext.Provider value={{showMenu,setShowMenu}}>
            <Aside/>
            <Content/>
          </MainContext.Provider>
        </BrowserRouter>
      </section>
    </>
  );
}
 
export default App;