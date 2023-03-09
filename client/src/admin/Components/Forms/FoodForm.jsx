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
// import { postAccessories } from "../../../redux/actions/actions";

export const FoodForm = () => {
  // const dispatch = useDispatch();
  // const onFileSelect = (file) => {
  //   console.log("File changed: ", file);
  //   if (file) {
  //     file.done((info) => console.log("File uploaded: ", info));
  //   }
  // };
  // const uploadFileSelect = (file) => {
  //   if (!file) {
  //     console.log("File removed from widget");
  //   }
  //   file.done((fileInfo) => {
  //     setValues.image(fileInfo.originalUrl);
  //     console.log("done");
  //   });
  // };

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
      fat: "",
      sodium: "",
      sugar: "",
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
      ),
      type: Yup.string("Enter the type")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      fat: Yup.string("Enter the fat")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      sodium: Yup.string("Enter the sodium")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      sugar: Yup.string("Enter the sugar")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters"),
      description: Yup.string()
        .min(10, "Min. 10 characters")
        .max(300, "Max. 300 characters")
        .required("Description is required"),
      qualification: Yup.number()
        .moreThan(0, "Quantity must be greater than zero")
        .required("Qualification is required"),
      amount: Yup.number()
        .moreThan(0, "Quantity must be greater than zero")
        .required("Amount is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      //   dispatch(postAccessories(values));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New accessesory has been created successfully",
        showConfirmButton: true,
      });
      resetForm({ values: "" });
    },
  });
  return (
    <>
      <Link to="/dashboard/foods">
        <button type="button" className="form-buttom">
          Back
        </button>
      </Link>
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
            <MenuItem value="mainDish">Main Dish</MenuItem>
            <MenuItem value="salad">Salad</MenuItem>
            <MenuItem value="dessert">Dessert</MenuItem>
            <MenuItem value="appetizer">Appetizer</MenuItem>
            <MenuItem value="drink">Drink</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Fat"
            value={values.fat}
            name="fat"
            margin="normal"
            onChange={handleChange}
            error={touched.fat && errors.fat ? true : false}
            helperText={
              touched.fat && errors.fat ? <span>{errors.fat} </span> : false
            }
            {...getFieldProps("fat")}
          >
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Sodium"
            value={values.sodium}
            name="sodium"
            margin="normal"
            onChange={handleChange}
            error={touched.sodium && errors.sodium ? true : false}
            helperText={
              touched.sodium && errors.sodium ? (
                <span>{errors.sodium} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("sodium")}
          >
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Sugar"
            value={values.sugar}
            name="sugar"
            margin="normal"
            onChange={handleChange}
            error={touched.sugar && errors.sugar ? true : false}
            helperText={
              touched.sugar && errors.sugar ? (
                <span>{errors.sugar} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("sugar")}
          >
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
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
          {/* <fieldset>
            <legend>Image</legend>
            <Widget
              // className="uploader"
              publicKey={"31565ad8e1a6027b4914"}
              name="image"
              value={values.image}
              previewStep
              clearable
              crop
              margin="normal"
              onChange={(e) => setFieldValue("image", e.originalUrl)}
              onFileSelect={onFileSelect}
              // {...getFieldProps('image')}
            />
            {touched.image && errors.image && (
              <span className="error">{errors.image}</span>
            )}
          </fieldset> */}
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
