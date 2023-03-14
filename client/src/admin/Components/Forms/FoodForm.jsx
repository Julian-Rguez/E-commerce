import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
// import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./Form.css";
import { Link } from "react-router-dom";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { FormGroup } from "reactstrap";
import { useState } from "react";
import { postFood } from "../../../Redux/Actions/Actions";

export const FoodForm = () => {
  const dispatch = useDispatch();
  const [ loding, setLonding] = useState(false)

  const {
    errors,
    touched,
    getFieldProps,
    values,
    setValues,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      image: "",
      available: true,
      price: 0,
      discount: 0,
      type: "",
      Fat: "",
      Sodium: "",
      Sugar: "",
      description: "",
      qualification: 0,
      amount: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string("Enter the food's name")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters")
        .required("Name is required"),
      // image: Yup.string().required("Image is required"),
      available: Yup.boolean().required("Available is required"),
      price: Yup.number()
        .positive("Price must be greater than zero")
        .required("Price is required"),
      discount: Yup.number().moreThan(
        -1,
        "Discount must be greater or equal to zero"
      ).lessThan(101, "Discount top is 100"),
      type: Yup.string("Enter the type")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      Fat: Yup.string("Enter the fat")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      Sodium: Yup.string("Enter the sodium")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      Sugar: Yup.string("Enter the sugar")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      description: Yup.string()
        .min(10, "Min. 10 characters")
        .max(300, "Max. 300 characters")
        .required("Description is required"),
      qualification: Yup.number()
        .moreThan(0, "Qualification must be greater than zero")
        .lessThan(6,'Qualification limit is 5')
        .required("Qualification is required"),
      amount: Yup.number()
        .moreThan(0, "Amount must be greater than zero")
        .required("Amount is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
        dispatch(postFood(values));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New accessesory has been created successfully",
        showConfirmButton: true,
      });
      resetForm({ values: "" });
    },
  });

  const uqdat = async (e)=> {
    const files = e.target.files
    const data2 = new FormData()
    data2.append("file", files[0])
    data2.append("upload_preset", "images")
    setLonding(true)
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/bl3ychz/image/upload",
      {
        method: "POST",
        body: data2
      }
    )
    const file = await res.json()
    setLonding(false)
    return setValues({
      ...values,
       image : file.secure_url })
  }

  return (
    <>
      <Link to="/dashboard/foods">
        <button type="button" className="form-buttom">
          Back
        </button>
      </Link>
      {console.log(values)}
      <div className="form_accessory">
        <label className="form_title">CREATE NEW FOOD</label>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            value={values.name}
            type="text"
            variant="outlined"
            label="Name"
            margin="normal"
            onChange={handleChange}
            error={touched.name && errors.name ? true : false}
            helperText={
              touched.name && errors.name ? <span>{errors.name} </span> : false
            }
            {...getFieldProps("name")}
          />
          <fieldset>
            <legend>Available </legend>
            <RadioGroup
              row
              name="status"
              value={values.status}
              style={{ marginLeft: "200px" }}
              onChange={handleChange}
            >
              <FormControlLabel
                value={true}
                control={<Radio size="small" />}
                label="Valid"
              />
              <FormControlLabel
                value={false}
                control={<Radio size="small" />}
                label="Invalid"
              />
            </RadioGroup>
          </fieldset>
          <TextField
            fullWidth
            name="price"
            value={values.price}
            type="number"
            varient="filled"
            min="0.00"
            max="10000.00"
            step="0.01"
            label="Price"
            margin="normal"
            onChange={handleChange}
            error={errors.price && touched.price ? true : false}
            helperText={
              errors.price && touched.price ? (
                <span>{errors.price} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("price")}
          />
          <TextField
            fullWidth
            name="discount"
            value={values.discount}
            type="number"
            min="0"
            max="100"
            label="Discount"
            margin="normal"
            onChange={handleChange}
            error={touched.discount && errors.discount ? true : false}
            helperText={
              touched.discount && errors.discount ? (
                <span>{errors.discount} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("discount")}
          />
          <TextField
            fullWidth
            select
            label="Type"
            value={values.type}
            name="Type"
            margin="normal"
            onChange={handleChange}
            error={touched.type && errors.type ? true : false}
            helperText={
              touched.type && errors.type ? <span>{errors.type} </span> : false
            }
            {...getFieldProps("type")}
          >
            <MenuItem value="Main dish">Main Dish</MenuItem>
            <MenuItem value="Salad">Salad</MenuItem>
            <MenuItem value="Dessert">Dessert</MenuItem>
            <MenuItem value="Appetizer">Appetizer</MenuItem>
            <MenuItem value="Drink">Drink</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Fat"
            value={values.Fat}
            name="Fat"
            margin="normal"
            onChange={handleChange}
            error={touched.Fat && errors.Fat ? true : false}
            helperText={
              touched.Fat && errors.Fat ? <span>{errors.Fat} </span> : false
            }
            {...getFieldProps("Fat")}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Sodium"
            value={values.Sodium}
            name="Sodium"
            margin="normal"
            onChange={handleChange}
            error={touched.Sodium && errors.Sodium ? true : false}
            helperText={
              touched.Sodium && errors.Sodium ? (
                <span>{errors.Sodium} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("Sodium")}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Sugar"
            value={values.Sugar}
            name="Sugar"
            margin="normal"
            onChange={handleChange}
            error={touched.Sugar && errors.Sugar ? true : false}
            helperText={
              touched.Sugar && errors.Sugar ? (
                <span>{errors.Sugar} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("Sugar")}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>
          <TextField
            fullWidth
            name="description"
            value={values.description}
            multiline
            maxRows={10}
            margin="normal"
            label="Description"
            onChange={handleChange}
            error={errors.description && touched.description ? true : false}
            helperText={
              errors.description && touched.description ? (
                <span>{errors.description} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("description")}
          />
          <TextField
            fullWidth
            name="quanlification"
            value={values.qualification}
            type="number"
            min="0"
            max="100"
            label="Qualification"
            margin="normal"
            onChange={handleChange}
            error={errors.qualification && touched.qualification ? true : false}
            helperText={
              touched.qualification && errors.qualification ? (
                <span>{errors.qualification} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("qualification")}
          />
          <TextField
            fullWidth
            name="amount"
            value={values.amount}
            type="number"
            min="0"
            max="100"
            label="Amount"
            margin="normal"
            onChange={handleChange}
            error={errors.amount && touched.amount ? true : false}
            helperText={
              touched.amount && errors.amount ? (
                <span>{errors.amount} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("amount")}
          />
          <FormGroup>
          <fieldset>
            <p>image</p>
                <input type="file" name="file" onChange={uqdat}/>
          </fieldset>
          </FormGroup>
          <Button
            onClick={() => console.log("image", values.image)}
            color="primary"
            sx={{ backgroundColor: "#2F3E46" }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
