
import React from "react";
import "./order.css";

export default function Order () {

  return (
    <div>
      <br /><div className="filteTittle">Order</div>
      <div className="ordenado">
        <div id="inorder" className="DeaZ2">
          Order for_
        </div>

        <select className="DeaZ2" >
          <option value={"Brand"}>Food</option>
          <option value={"Category"}>Discount</option>
        </select>

        <div id="inorder" className="DeaZ2">
          In order_
        </div>

        <select className="DeaZ2" >
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