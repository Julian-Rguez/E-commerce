import React,{ useState} from "react";
import "./home.css"
import Cards from '../cards/cards'
import Filter from "../filter/filter";
import foods from '../../fileTemp'
import About from "../about/about";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
export default function Home() {

  const [pag, setPag] = useState(1);

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