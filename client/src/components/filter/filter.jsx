import React, { useState } from "react";
import Order from "../order/order";
import "./filter.css"

export default function Filter ({foods}) {
  //--------------------------------------------variables
  const [act, setact] = useState (1)
  //--------------------------------------------finction
  function openFilter(e, value){ // cambio de menu de filtro
    e.preventDefault();
    value === act? setact(0):setact(value)
  }
  //------------------------------------item para filter
  const itemsFilter = [[],[],[],[]];
  const cantFilter = [[],[],[],[]];
  foods.map((element)=>{
    if (!itemsFilter[0].includes(element.type)) {
      itemsFilter[0].push(element.type);
      cantFilter[0].push(1);
    }
    else{
      cantFilter[0][itemsFilter[0].indexOf(element.type)] +=1
    }
    if (!itemsFilter[1].includes(element.Fat)) {
      itemsFilter[1].push(element.Fat);
      cantFilter[1].push(1);
    }
    else{
      cantFilter[1][itemsFilter[1].indexOf(element.Fat)] +=1
    }
    if (!itemsFilter[2].includes(element.Sodium)) {
      itemsFilter[2].push(element.Sodium);
      cantFilter[2].push(1);
    }
    else{
      cantFilter[2][itemsFilter[2].indexOf(element.Sodium)] +=1
    }
    
    if (!itemsFilter[3].includes(element.Sugar)) {
      itemsFilter[3].push(element.Sugar);
      cantFilter[3].push(1);
    }
    else{
      cantFilter[3][itemsFilter[3].indexOf(element.Sugar)] +=1
    }


  })
  //----------------------------------------------------

  return (
    <div className="contFilter">
      <div id="filtercontenido">
        <div className="filteTittle">Search</div>
        <input type="text" className="filteSubTitletxt"/> <br />
        <Order/>
        <br /><div className="filteTittle">Filter</div>
        <div className="filteSubTitle" onClick={(e)=>openFilter(e,1)}>By type of food</div> 
        <div className="filterGrops">
          {act === 1?(
            itemsFilter[0].map((obj, ind) => (
            <div key={ind}>
              <div>
                {obj ==="Dessert"?<img id="filterimg" src="https://album.mediaset.es/eimg/2020/06/16/6hHUb5NRUCam8q1fwmYPu5.jpg?w=480" alt={"No"} />:
                obj ==="Appetizer"?<img id="filterimg" src="https://static.vecteezy.com/system/resources/thumbnails/001/740/787/small/round-ring-snacks-in-a-basket-free-photo.jpg" alt={"No"} />:
                obj ==="Drink"?<img id="filterimg" src="https://thumbs.dreamstime.com/b/bebida-roja-8623697.jpg" alt={"No"} />:
                <img id="filterimg" src="https://s1.1zoom.me/big0/648/The_second_dishes_Potato_Meat_products_Vegetables_563131_1280x853.jpg" alt={"No"} />}
              </div>
              <div className="filtername">
                {obj} ({cantFilter[0][ind]})
              </div>
            </div>
          ))):
          null}
        </div>
        <div className="filteSubTitle"onClick={(e)=>openFilter(e,2)}>By amount of fat</div> 
        <div className="filterGrops">
        {act === 2?(
            itemsFilter[1].map((obj, ind) => (
            <div key={ind}>
              <div>
                {obj ==="High"?<img id="filterimg2" src="https://i.ibb.co/h7P81RB/high.png" alt={"No"} />:
                obj ==="Low"?<img id="filterimg2" src="https://i.ibb.co/p46MZK3/low.png" alt={"No"} />:
                <img id="filterimg2" src="https://i.ibb.co/j3xsz2k/medium.png" alt={"No"} />}
              </div>
              <div className="filtername">
                {obj} ({cantFilter[1][ind]})
              </div>
            </div>
          ))):
          null}
          </div>
        <div className="filteSubTitle"onClick={(e)=>openFilter(e,3)}>By amount of sodium </div> 
        <div className="filterGrops">
        {act === 3?(
            itemsFilter[2].map((obj, ind) => (
            <div key={ind}>
              <div>
                {obj ==="High"?<img id="filterimg2" src="https://i.ibb.co/h7P81RB/high.png" alt={"No"} />:
                obj ==="Low"?<img id="filterimg2" src="https://i.ibb.co/p46MZK3/low.png" alt={"No"} />:
                <img id="filterimg2" src="https://i.ibb.co/j3xsz2k/medium.png" alt={"No"} />}
              </div>
              <div className="filtername">
                {obj} ({cantFilter[2][ind]})
              </div>
            </div>
          ))):
          null}
          </div>
        <div className="filteSubTitle"onClick={(e)=>openFilter(e,4)}>By amount of sugar </div> 
        <div className="filterGrops">
        {act === 4?(
            itemsFilter[3].map((obj, ind) => (
            <div key={ind}>
              <div>
                {obj ==="High"?<img id="filterimg2" src="https://i.ibb.co/h7P81RB/high.png" alt={"No"} />:
                obj ==="Low"?<img id="filterimg2" src="https://i.ibb.co/p46MZK3/low.png" alt={"No"} />:
                <img id="filterimg2" src="https://i.ibb.co/j3xsz2k/medium.png" alt={"No"} />}
              </div>
              <div className="filtername">
                {obj} ({cantFilter[3][ind]})
              </div>
            </div>
          ))):
          null}
          </div>
      </div>
    </div>
  );
};

