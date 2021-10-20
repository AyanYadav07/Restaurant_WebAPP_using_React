import React from 'react';
import "./style.css";
import menu from "./menuApi";
import MenuCard from "./menuCard"

const Restaurant = () => {
  const [menuData,setMenuData] = React.useState(menu)
  const filterItem=(category)=>{
    const updatedList=menu.filter((curElem)=>{
      return curElem.category=== category;
    });
    setMenuData(updatedList);
  };
    return (
        <>
        <nav className="navbar">
          <div className="btn-group">
            <button className="btn-group__item"
            onClick={()=>filterItem("starters")}>STARTERS</button>
            <button className="btn-group__item"
            onClick={()=>filterItem("Chinese")}>CHINESE</button>
            <button className="btn-group__item"
            onClick={()=>filterItem("Main Course")}>MAIN COURSE</button>
            <button className="btn-group__item"
            onClick={()=>setMenuData(menu)}>ALL</button>

          </div>
        </nav>
          < MenuCard menuData={menuData}/>
        </>
    );
};

export default Restaurant;
