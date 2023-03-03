
import React from "react";
import "./pagination.css";

export const Pagination = ({ total, paginate }) => {
  const pageNumbers = [];
  let numOfPages = Math.ceil((total-6) / 6)
  numOfPages +=1;
  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <div id="sep">-------------</div>
      <div>Pages </div>
        {pageNumbers.map((num) => (
          <div key={num} className="item">
            <button onClick={(e) => paginate(e, num)}>
              {num} 
            </button>
          </div>
        ))}
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