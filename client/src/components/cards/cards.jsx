import React, { useState } from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import "./cards.css"
import Card from "../card/card";
import { Pagination } from "../pagination/pagination";
import NotFound from '../NotFound/NotFound'

export default function Cards ({foods,total,paginate, favorites, setFavorites}) {
  const [up, setup] = useState (0)
  
  const inShopping = reactLocalStorage.get('Shopping');
  const arrayInShopping =inShopping?.split(',')
  function update(){
    setup(up+1)
  }
  return (
    <div id="contPag" >
      <div className="showing">
        {foods.length > 0 ?
        foods.map((card,index) => <Card key={index} arrayInShopping={arrayInShopping} card = {card} update = {update} favorites = {favorites} setFavorites = {setFavorites}/>)
        : <NotFound/>
        }
      </div>   
      <div>     
        <Pagination	
            total={total}
            paginate={paginate}
          /> 
      </div>
    </div>
  );
};

