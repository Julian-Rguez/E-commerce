import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from 'reactjs-localstorage';
import { getAllFoods, shopping } from '../../Redux/Actions/Actions'
import "./shopping.css";
import NavBar from "../Nav/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Shopping() {
  function fnValNum(e) {
    e.preventDefault();
    valNum[e.target.id] = e.target.value;
    settotal(e.target.value)
  }
  function minCant(e) {
    e.preventDefault();
    const inf = e.target.id.split(",")
    let current = (parseInt(valNum[inf[0]]));
    if (current > 1) {
      valNum[inf[0]] = (current - 1).toString()
      settotal(valNum[inf[0]])
      let save = valNum;
      save.unshift("0")
      reactLocalStorage.set("ShoppingCant", save)
    }
  }
  function masCant(e) {
    e.preventDefault();
    const inf = e.target.id.split(",")
    let current = (parseInt(valNum[inf[0]]));
    if (current < (parseInt(inf[1]))) {
      valNum[inf[0]] = (current + 1).toString()
      settotal(valNum[inf[0]])
      let save = valNum;
      save.unshift("0")
      reactLocalStorage.set("ShoppingCant", save)
    }
  }
  function ShopDelete(e) {
    e.preventDefault();
    dispatch(shopping(e.target.id))
    settt(tt - 1)
  }

  const dispatch = useDispatch();
  const [total, settotal] = useState(10)
  const display = []
  const info = (reactLocalStorage.get('Shopping')).split(",");
  const dataCant = (reactLocalStorage.get('ShoppingCant')).split(",")
  dataCant.shift();
  const [valNum] = useState(dataCant)
  const [tt, settt] = useState(dataCant.length)

  useEffect(() => {
    dispatch(getAllFoods())
  }, [dispatch]);
  const foods = useSelector((state) => state.allFoods);



  foods.map((food) => {
    if (info.includes(food.id)) {
      display.push(food)
    }
  })

  if (valNum[0] === "0") { console.log("borrado"); valNum.shift() };

  let ttl = 0;
  display.map((food, idx) => ttl += ((food.price * ((100 - food.discount) / 100)) * valNum[idx]))
  let names = "";
  display.map((val) => {
    names += val.name + ", "
  })
  console.log(ttl);
  const shoping = {
    id: "4",
    name: names,
    image: "https://i.ibb.co/TqxCZDm/logo.png",
    description: "Order made to Deli-Gou",
    discount: 0,
    price: ttl
  }
  return (
    <>

      <NavBar></NavBar>
      <div className="ShopContainer1">
        <div className="ShopContainer1a">
          <div className="ShopTittle">Shopping cart ({tt})</div>
        </div>
        <div className="header2">
          <div></div>
          <div>Description </div>
          <div>Price</div>
          <div>Discount</div>
          <div>Amount</div>
          <div>Total</div>
          <div className="btnXTittle">Delete</div>
        </div><br />

        {display.map((food, idx) => (
          <div key={idx} className="header">
            <img className="shopImg" src={food.image} alt={"No"} />
            <div>
              <div id="shopTl">{food.name}</div>
              <div>{food.type}</div>
            </div>
            <div>{food.price} USD</div>
            <div>{food.discount}%</div>

            <div >
              <div className="shopAmount">
                <button className="shopme" min="1" id={idx} onClick={(e) => minCant(e)}>-</button>
                <input disabled={true} id={idx} className="shopNum" type="text" value={valNum[idx]} onChange={(e) => fnValNum(e)}></input>
                <button className="shopma" id={idx + "," + food.amount} onClick={(e) => masCant(e)}>+</button>
              </div>
              <div className="perMax">(Max {food.amount})</div>
            </div>
            <div>{((((food.price * ((100 - food.discount) / 100)) * 1).toFixed(2)) * parseInt(valNum[idx])).toFixed(2)} USD</div>
            <button id={food.id} onClick={(e) => ShopDelete(e)} className="btnX">❌</button>
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
          <button
            className="btn btn-success"
            onClick={() => {
              axios
                .post("http://localhost:3001/payment", shoping)
                .then(
                  (res) =>
                    (window.location.href = res.data.response.body.init_point)
                );
            }}
          >
            Start pay
          </button>
        </div><br />
      </div>
      <Footer></Footer>
    </>
  );
}
