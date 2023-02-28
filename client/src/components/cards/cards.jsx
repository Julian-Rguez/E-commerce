import React from "react";
import "./cards.css"
import Card from "../card/card";
import { Pagination } from "../pagination/pagination";

export default function Cards ({foods,total,paginate}) {
  return (
    <div id="contPag" >
      <div className="showing">
        {foods.length > 0 ?
        foods.map((card,index) => <Card key={index} card = {card} />)
        : <h3>Espere...</h3>
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

