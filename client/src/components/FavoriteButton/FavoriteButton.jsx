import React, { useState } from 'react';
import './FavoriteButton.css'
import Favorite from '@mui/icons-material/Favorite';
import { grey} from '@mui/material/colors';

export default function FavoriteButton({favorites}) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

const [showBox, setShowBox] = useState(false);
// const [mouseOverBox, setMouseOverBox] = useState(false);

const toggleBox = () => {
  setShowBox(!showBox);
}

const handleBoxMouseEnter = () => {
//   setMouseOverBox(true);
  setShowBox(true);
}

const handleBoxMouseLeave = () => {
//   setMouseOverBox(false);
  setShowBox(false);
}


  return (
    <div className="favorite-button">
      <button onClick={toggleBox} onMouseEnter={toggleBox} onMouseLeave={handleBoxMouseLeave}>
        <Favorite sx={{
          color: grey[50]
        }}></Favorite>
        </button>

      {showBox && (
        <div
          className="favorite-box"
          onMouseEnter={handleBoxMouseEnter}
          onMouseLeave={handleBoxMouseLeave}
        >
            
               {favorites? favorites.map(fav => { 
               return <div className='favs-container'>
                <img src={fav.image} alt="" id='favs-image'/>
                <div>
                 <p className='favs-name' >{fav.name}</p> 
                 <p className='favs-name'>${fav.price}</p>  
                </div>
               
               </div>
               
            }): <p className='nonFavs'>Add some favorites</p>}   
            
          
        </div>
      )}
    </div>
  );
}