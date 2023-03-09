import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './contact.css'
import NavBar from "../Nav/NavBar";

const Contact = () => {
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const sendEmail = (object) => {
        emailjs.send("service_uyhwv8l", "template_ji44nnu", object, "vpfgbZTpSwuX2jqX9")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };



    return (

        <div className="contact">
            <NavBar />
            <div className="container">

                <div className="form-container">
                    <Formik
                        initialValues={{
                            nombre: "",
                            email: "",
                            mensaje: "",
                        }}


                        validate={(valores) => {
                            let errores = {};
                            //validacion nombre
                            if (!valores.nombre) {
                                errores.nombre = "Please enter a name";
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                errores.nombre = "The name can contain only letters and spaces";
                            }
                            //validacion correo
                            if (!valores.email) {
                                errores.email = "Please enter an email";
                            } else if (
                                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                    valores.email
                                )
                            ) {
                                errores.email = "Please enter a valid email";
                            }

                            if (!valores.mensaje) {
                                errores.mensaje = "Please enter a message"
                            }

                            return errores;

                        }}


                        onSubmit={(valores, { resetForm }) => {
                            resetForm();
                            console.log(valores)
                            console.log("Mail sent successfully");
                            sendEmail(valores);
                            setFormularioEnviado(true);
                            setTimeout(() => setFormularioEnviado(false), 10000);
                        }}
                    >


                        {({ values, handleSubmit, errors }) => (



                            <Form onSubmit={handleSubmit}>
                                <div >
                                    <h1>Contact Us!</h1>
                                    <label htmlFor="nombre">NAME:</label>
                                    <Field
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        values={values.nombre}
                                        placeholder="Name"
                                    />
                                    <ErrorMessage
                                        name="nombre"
                                        component={() => <div className="error">{errors.nombre}</div>}
                                    />

                                    <div>
                                        <label htmlFor="email">EMAIL:</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            values={values.email}
                                            placeholder="Enter email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component={() => <div className="error">{errors.email}</div>}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="mensaje">MESSAGE:</label>
                                        <Field
                                            as="textarea"
                                            id="mensaje"
                                            name="mensaje"
                                            values={values.mensaje}
                                            placeholder="Write your message"
                                        />
                                        <ErrorMessage
                                            name="mensaje"
                                            component={() => <div className="error">{errors.mensaje}</div>}
                                        />

                                    </div>
                                    <button className="button" type="submit">Send</button>
                                    {formularioEnviado && <p className="exito">Mail sent successfully!</p>}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Contact;
