
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./order.css";
import {getfilterFoods} from '../../Redux/Actions/Actions'

export default function Order () {
  const dispatch = useDispatch();
  const FoodCurrent = useSelector((state) => state.foods);
  const [order, setorder] = useState ("Ascending")
  const [depe, setdepe] = useState ("Food")
  let ordenado = [];

  function fnDepe(e){
    e.preventDefault();
    setdepe(e.target.value)
  }
  function fnOrder (e){
    e.preventDefault();
    setorder(e.target.value)
  }
  //------------------------------------------------------ordenate
  if (order === "Ascending" && depe === "Type") {
    ordenado = FoodCurrent.sort(function (a, b) {
      if (a.type > b.type) {
        return 1;
      }
      if (a.type < b.type) {
        return -1;
      }
      return 0;
    });
  } else if (order === "Descending" && depe === "Type") {
    ordenado = FoodCurrent.sort(function (a, b) {
      if (a.type < b.type) {
        return 1;
      }
      if (a.type > b.type) {
        return -1;
      }
      return 0;
    });
  }
  if (order === "Ascending" && depe === "Name") {
    ordenado = FoodCurrent.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (order === "Descending" && depe === "Name") {
    ordenado = FoodCurrent.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  
  //dispatch(getfilterFoods(ordenado))

  return (
    <div>
      <br /><div className="filteTittle">Order</div>
      <div className="ordenado">
        <div id="inorder" className="DeaZ2">
          Order for_
        </div>

        <select className="DeaZ2" onChange={(e) => fnDepe(e)}>
          <option value={"Name"}>Name</option>
          <option value={"Type"}>Type</option>
        </select>

        <div id="inorder" className="DeaZ2">
          In order_
        </div>

        <select className="DeaZ2" onChange={(e) => fnOrder(e)}>
          <option value={"Ascending"}>Ascending</option>
          <option value={"Descending"}>Descending</option>
        </select>
      </div>
    </div>    
  );
};




















// import React, { Fragment } from "react";
// import "./Pagination.css";

// export const Pagination = ({ videogamesPerPage, totalVideogames, pagina }) => {
//   const pageNumbers = [];
//   const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)
//   for (let i = 1; i <= numOfPages ; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//       <nav className="pagination">
//         <div  className="item"><button >{'<'}</button></div>
//         {pageNumbers.map((num) => (
//           <div key={num} className="item">
//             <button onClick={(e) => {pagina(e, num)}}>
//               {num} 
//             </button>
//           </div>
//         ))}
//         <div  className="item" id="actual"><button >{'>'}</button></div>
//         <h3 className="about"></h3> 
//       </nav>
//   );
// };