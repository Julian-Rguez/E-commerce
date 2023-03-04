import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./shopping.css";
import NavBar from "../Nav/NavBar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";

export default function Shopping() {

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
  
  
  const { isAuthenticated } = useAuth0();


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
        <div className="header">
          <img className="shopImg" src={"https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa-945x630.jpg"} alt={"No"} />
          <div>
            <div>Drink</div>
            <div>BAMBINO’S ITALIAN</div> </div>
          <div>4 USD</div>
          <div>10%</div>
          
          <div className="shopAmount">
            <input className="shopNum" type="number" min="1" max="10"></input>
          </div>
          <div>3.6 USD</div>
          <button>❌</button>
        </div>
        <div id="shopTotal">
          <div></div>
          <div>TOTAL: 27 UDS</div>
        </div><br /><br />
        <div className="cbutondetail">
          <Link to={`/home`} >
            <button class="btn btn-success"> Go back </button>
          </Link>
          <div id="Separate"></div>
          <button class="btn btn-success">Start pay</button>
        </div><br />
      </div>
      <Footer></Footer>
    </>
  );
}
