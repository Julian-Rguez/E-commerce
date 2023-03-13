import React, { useState } from "react";
import "./Review.css";
import NavBar from "../Nav/NavBar";

export default function Review() {
  const allBilling = [{ user: { eMail: "el mail" }, car: { id: "23id32", name: "hamburgess" } }] //= (useSelector((state) => state.allbilling)); //facturas 
  const [current, setcurrent] = useState(0)
  //----------
  let detail = ""
  const user = "el mail"//const { user } = useAuth0();
  allBilling.map((bill) => {                                     //facturas correspondientes al correo
    if (bill.user.eMail === user) detail = bill
  })
  //---------
  const temp = [];
  temp.push(detail.car.id)
  temp.push(0)
  temp.push("")

  const [qualify, setqualify] = useState(temp);

  function cl(e) {
    e.preventDefault();
    let cliced = e.target.className.split('|');
    const tempor = qualify
    tempor[((parseInt(cliced[0]) + 1) * 3) + 1] = parseInt(cliced[1]);
    setqualify(tempor)
    setcurrent(current + 1)
  }
  function changeComment(e) {
    e.preventDefault();
    const tempor = qualify
    tempor[((parseInt(e.target.className) + 1) * 3) + 2] = e.target.value;
    setqualify(tempor)
    setcurrent(current + 1)
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="bkng">
        <div className="reviewContenedor">
          <div id="reservedTittle" className="reservedTittle">Foods to qualify</div> <br /><br />
          <div>
            {detail.car.id !== "" ?
              <div className="barra">
                <div id="reviewNameStar">
                  <h4 id="reviewName">{detail.car.name} </h4>
                  <div id="reviewStart">
                    {qualify[1] >= 1 ? <button onClick={(e) => cl(e)} id="starTrue" className="-1|1">★</button> : <button onClick={(e) => cl(e)} id="starFalse" className="-1|1">☆</button>}
                    {qualify[1] >= 2 ? <button onClick={(e) => cl(e)} id="starTrue" className="-1|2">★</button> : <button onClick={(e) => cl(e)} id="starFalse" className="-1|2">☆</button>}
                    {qualify[1] >= 3 ? <button onClick={(e) => cl(e)} id="starTrue" className="-1|3">★</button> : <button onClick={(e) => cl(e)} id="starFalse" className="-1|3">☆</button>}
                    {qualify[1] >= 4 ? <button onClick={(e) => cl(e)} id="starTrue" className="-1|4">★</button> : <button onClick={(e) => cl(e)} id="starFalse" className="-1|4">☆</button>}
                    {qualify[1] >= 5 ? <button onClick={(e) => cl(e)} id="starTrue" className="-1|5">★</button> : <button onClick={(e) => cl(e)} id="starFalse" className="-1|5">☆</button>}
                  </div>
                  <div></div>
                </div>
                <textarea value={qualify[2]} id="reviewDetail" placeholder="Enter a comment:" className="-1" onChange={(e) => changeComment(e)} />
              </div> : null}

          </div> <br />
          <div className="reviewButon">
            <button id="confir" className="btn btn-success">Send</button>
          </div><br />
        </div>
      </div>
    </>
  );
}