import { Title } from "@mui/icons-material";
import { Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";
const Signup = () => {
  
  const url = app_config.backend_url;
  // for using formik
  // 1. object for initializing which should match with model
  const userForm = {
    email: "",
    password: "",
    username: "",
    age: 0,
  };
  // 2. create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    // 1. Address
    // 2. Request method
    // 3. Data
    // 4. Data Format

    fetch(url + "/user/add");
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon : "success",
          title : 'Success',
          text : 'Registered successfully',
        });
      });
  };

  //   3. Create Formik Component inside JSX
  //   4. Create Validation Schema
  const myValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });
  return (
    <div>
      <Container>
        <h1>Registration Form</h1>
        <Formik
          initialValues={userForm}
          onSubmit={userSubmit}
          validationSchema={myValidation}
        >
          {({ values, handleSubmit, handleChange, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                className="mt-3"
                label="Email Address"
                variant="outlined"
                id="email"
                value={values.email}
                onChange={handleChange}
                helperText={errors.email}
                error={Boolean(errors.email)}
              />
              <TextField
                className="mt-3"
                label="Password"
                type="password"
                variant="outlined"
                id="password"
                value={values.password}
                onChange={handleChange}
                helperText={errors.password}
                error={Boolean(errors.password)}
              />
              <TextField
                className="mt-3"
                label="Username"
                type="text"
                variant="outlined"
                id="username"
                value={values.username}
                onChange={handleChange}
              />
              <TextField
                className="mt-3"
                label="Age"
                type="number"
                variant="outlined"
                id="age"
                value={values.age}
                onChange={handleChange}
              />
              <Button type="submit" className="mt-3" variant="contained">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};
export default Signup;