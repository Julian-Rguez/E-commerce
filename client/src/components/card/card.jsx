import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';

function Card({card}) {
	return (
		<div className="cardd">
		  <div></div>
		  <div id='colum-img-det'>
			<img className="img" src={card.image} alt={"No"} />
			<Link to={`/detail/${card.id}`} state={card} className="link">
			  <button id='btnDetail' className='btn btn-success'> Details </button>
			</Link>
		  </div>	
		  <div className="texts">
			<div className="text1">
			  {card.name}
			</div>
			<div className="conText">
			  <div className="text2">type: {card.type} </div>
			  <div className="text2">Fat: {card.Fat} </div>
			  <div className="text2">Sodium: {card.Sodium} </div>
			  <div className="text2">Sugar: {card.Sugar} </div>
			</div>
			<div className="text3">US$ {card.price}</div>
		  </div>	
		  <div className="cardPart3">			
		  	<div><button id='btnCarrito'> 🛒 </button></div>
			<div className="Desc">discount</div>
			<div className="DescVal">{card.discount}%</div>
		  </div>
		  <div></div>
		</div>
	  );
}

export default Card;
