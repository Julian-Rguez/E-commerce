import React, { useState } from 'react';
import './card.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { shopping } from '../../Redux/Actions/Actions';
import Rating from '@mui/material/Rating';

function Card({card,arrayInShopping,update}) {
	const dispatch = useDispatch(); 

	function addCar(e){
		e.preventDefault();
		dispatch (shopping(e.target.value))
		update()
	}
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
			 {card.name} ({card.amount})
			</div>
			<div className="conText">
			  <div className="text2">type: {card.type} </div>
			  <div className="text2">Fat: {card.Fat} </div>
			  <div className="text2">Sodium: {card.Sodium} </div>
			  <div className="text2">Sugar: {card.Sugar} </div>
			</div>
			<div className="text3">US$ {card.price}</div>
			{console.log(card)}
		  <Rating name="read-only" value={card.amount} readOnly />
		  </div>	
		  <div className="cardPart3">	
		  	{arrayInShopping.includes(card.id)?
		  	<button id= {card.id} className='btnCarritotrue' value={card.id} onClick = {(e)=>addCar(e)}></button>:
		  	<button id= {card.id} className='btnCarritofalse' value={card.id} onClick = {(e)=>addCar(e)}></button>}
			<div className="Desc">discount</div>
			<div className="DescVal">{card.discount}%</div>
		  </div>
		  <div></div>
		</div>
	  );
}

export default Card;
