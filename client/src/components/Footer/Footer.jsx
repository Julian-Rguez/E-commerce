import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer" >
        <MDBFooter
          bgColor="dark"
          className="text-center text-lg-start text-muted mt-auto"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100090890799653" target="_blank"
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/deligou/ " target="_blank"
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="instagram" />
              </a>
              <a
                href="http://localhost:3000/contact"
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="google" />
              </a>
              {/* <a
                  href="https://www.students.soyhenry.com/"
                  className="me-4 text-reset"
                >
                  <MDBIcon fab icon="twitter" />
                </a> */}
              {/* <a
                href="https://www.students.soyhenry.com/"
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="linkedin" />
              </a>
              <a
                href="https://www.students.soyhenry.com/"
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="github" />
              </a> */}
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="concierge-bell" className="me-3" />
                    DeliGou
                  </h6>
                  <p>
                    Here is the perfect place to connect with costumers and
                    restaurants, we offer a wide list of services
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Restaurants
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Costumers
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Delivering
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Reserve
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="https://dos.ny.gov/consumer-protection" className="text-reset" target='_blank'>
                      Consumer protection
                    </a>
                  </p>
                  <p>
                    <a href="/dataprotection" className="text-reset" target='_blank'>
                      Personal data protection
                    </a>
                  </p>
                  <p>
                    <a href="/termsandconditions" className="text-reset" target='_blank'>
                      Terms and Conditions
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    deligou70@gmail.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              DeliGou.com
            </a>
          </div>
        </MDBFooter>
      </div>
    </>
  );
};
export default Footer;
