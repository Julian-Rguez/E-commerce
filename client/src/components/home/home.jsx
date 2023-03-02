import React,{ useEffect, useState} from "react";
import { useDispatch,useSelector } from 'react-redux';
import "./home.css"
import {getAllFoods} from '../../Redux/Actions/Actions'
import Cards from '../cards/cards'
import Filter from "../filter/filter";
import About from "../about/about";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
export default function Home() {

  
  const dispatch = useDispatch();
  const [pag, setPag] = useState(1);  
  const foods = useSelector((state) => state.foods);

  useEffect(() => {
    dispatch(getAllFoods())
   },[dispatch]);

  

    let cantXPag =  6;
    let cant = (pag * cantXPag);  
    let ini = (cant - cantXPag);  
  
    function paginate(e, num) {
      e.preventDefault();
      setPag(num); 
    }
  let foodXPag = foods.slice(ini, cant); 
  return (
    <>
      <NavBar/>
      <div className="loginContainer">HOME</div>   
      <Cards 
      foods={foodXPag} 
      total={foods.length}
      paginate={paginate} />  
      <Filter foods={foods}/>  
      <About/>
      <Footer/>
    </>
  );
}