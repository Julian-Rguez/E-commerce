import React from "react";
import "./filter.css"

export default function Filter ({foods}) {

  //------------------------------------item para filter
  const itemsFilter = [[],[],[],[]];

  foods.map((element)=>{
    if (!itemsFilter[0].includes(element.type)) itemsFilter[0].push(element.type);
    if (!itemsFilter[1].includes(element.Fat)) itemsFilter[1].push(element.Fat);
    if (!itemsFilter[2].includes(element.Sodium)) itemsFilter[2].push(element.Sodium);
    if (!itemsFilter[3].includes(element.Sugar)) itemsFilter[3].push(element.Sugar);
  })
  //----------------------------------------------------

  return (
    <div className="contFilter">
      <div id="filtercontenido">
        <div className="filteTittle">Filter</div><br />
        <div className="filteSubTitle">▼ By type of food</div> 
        <div className="filterGrops">
          {itemsFilter[0].map((obj, ind) => (
                    <div key={ind}>
                        <div>
                          {obj ==="Dessert"?<img id="img" src="https://album.mediaset.es/eimg/2020/06/16/6hHUb5NRUCam8q1fwmYPu5.jpg?w=480" alt={"No"} />:
                          <img id="img" src="https://s1.1zoom.me/big0/648/The_second_dishes_Potato_Meat_products_Vegetables_563131_1280x853.jpg" alt={"No"} />}
                        </div>
                      <div className="filtername">
                        {obj} ({itemsFilter[0].length})
                      </div>
                    </div>
                  ))}
        </div>
        <br /><div className="filteSubTitle">▼ By amount of fat</div> 
        <div className="filteSubTitle">▼ By amount of sodium </div> 
        <div className="filteSubTitle">▲ By amount of sugar </div>  
      </div>
    </div>
  );
};

