import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';
import {getAllFoods} from '../../Redux/Actions/Actions'
import "./shopping.css";
import NavBar from "../Nav/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

export default function Shopping() {
  const dispatch = useDispatch();
  const display = []
  useEffect(() => {
    dispatch(getAllFoods())
   },[dispatch]);
  const foods = useSelector((state) => state.allFoods); 

  const shoping =[{
    id: "4",
    name:"BEST BURGERS",
    image:"https://www.visitconcordca.com/imager/s3-us-west-1_amazonaws_com/concord-2018/craft/Best-Burgers_78c77f7e90fd3bfb1d9860e623e7e9a0.jpg",
    available: true,
    type: "Drink",
    Fat:"Medium",
    Sodium: "Medium",
    Sugar:"Medium",
    price: 9,
    description: "Delicious homemade burgers",
    discount:1,
    review:[]
  }]
  const info = (reactLocalStorage.get('Shopping')).split(",");

  foods.map ((food)=>{
    if (info.includes (food.id)){
      display.push(food)
    }
  })
  console.log(foods[3]);

  let ttl =0;
  display.map ((food)=>ttl += (food.price*((100-food.discount)/100)))

  return (
    <>
      <NavBar></NavBar>
      <div className="ShopContainer1">
        <div className="ShopContainer1a">
          <div className="ShopTittle">Shopping cart</div>
        </div>
        <div className="header2">
          <div></div>
          <div>Description </div>
          <div>Price</div>
          <div>Discount</div>
          <div>Amount</div>
          <div>Total</div>
          <div>Delete</div>
        </div><br />

        {display.map((food)=>(       
          <div className="header">
            <img className="shopImg" src={food.image} alt={"No"} />
            <div>
              <div id="shopTl">{food.name}</div>
              <div>{food.type}</div>
            </div>
            <div>{food.price} USD</div>
            <div>{food.discount}%</div>
            
            <div className="shopAmount">
              <input className="shopNum" type="number" min="1" max="10" value="1"></input>
            </div>
            <div>{((food.price*((100-food.discount)/100))*1).toFixed(2)}</div>
            <button>❌</button>
          </div>
        ))}

        <div id="shopTotal">
          <div></div>
          <div>TOTAL: {ttl.toFixed(2)} UDS</div>
        </div><br /><br />
        <div className="cbutondetail">
          <Link to={`/home`} >
            <button className="btn btn-success"> Go back </button>
          </Link>
          <div id="Separate"></div>
          <button className="btn btn-success">Start pay</button>
        </div><br />
      </div>
      <Footer></Footer>
    </>
  );
}
