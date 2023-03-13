import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./home.css"
import { getAllFoods } from '../../Redux/Actions/Actions'
import Cards from '../cards/cards'
import Filter from "../filter/filter";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
export default function Home() {


  const dispatch = useDispatch();
  const [pag, setPag] = useState(1);  
  const foods = useSelector((state) => state.foods);  
  const [order, setorder] = useState ("Ascending")
  const [depe, setdepe] = useState ("Name")  

  let ordenado = [];

  useEffect(() => {
    dispatch(getAllFoods())
  }, [dispatch]);

  //-------------------------------------------------
  if (order === "Ascending" && depe === "Type") {
    ordenado = foods.sort(function (a, b) {
      if (a.type > b.type) {
        return 1;
      }
      if (a.type < b.type) {
        return -1;
      }
      return 0;
    });
  } else if (order === "Descending" && depe === "Type") {
    ordenado = foods.sort(function (a, b) {
      if (a.type < b.type) {
        return 1;
      }
      if (a.type > b.type) {
        return -1;
      }
      return 0;
    });
  }
  else if (order === "Ascending" && depe === "Name") {
    ordenado = foods.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (order === "Descending" && depe === "Name") {
    ordenado = foods.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  // foods = [];
  // foods = ordenado;
  //-------------------------------------------------

  let cantXPag = 6;
  let cant = (pag * cantXPag);
  let ini = (cant - cantXPag);

  function fnDepe(e) {
    e.preventDefault();
    setdepe(e.target.value)
  }
  function fnOrder(e) {
    e.preventDefault();
    setorder(e.target.value)
  }

  function paginate(e, num) {
    e.preventDefault();
    setPag(num);
  }
  let foodXPag = foods.slice(ini, cant);
  return (
    <>
      <div className="fondo">

        <NavBar/>
        <Cards
      
          foods={foodXPag}
          total={foods.length}
          paginate={paginate} />

        <Filter paginate={paginate} />
        <div className="ordenado">
          <div id="inorder" className="DeaZ2">
            Order for_
          </div>

          <select id="inorder2" className="DeaZ2" onChange={(e) => fnDepe(e)}>
            <option value={"Name"}>Name</option>
            <option value={"Type"}>Type</option>
          </select>

          <div id="inorder" className="DeaZ2">
            In order_
          </div>

          <select id="inorder2" className="DeaZ2" onChange={(e) => fnOrder(e)}>
            <option value={"Ascending"}>Ascending</option>
            <option value={"Descending"}>Descending</option>
          </select>
        </div>

        <Footer />
      </div>
    </>
  );
}