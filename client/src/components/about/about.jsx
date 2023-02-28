
import React from "react";
import "./about.css";

export default function About ({ total, paginate }) {

  return (
    <nav className="about">
      <div>ABOUT....</div>
    </nav>
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