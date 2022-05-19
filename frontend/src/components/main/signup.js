import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";
import { TextField , Button} from "@mui/material";

const Signup = () => {
  const url = app_config.backend_url;

  const userForm = {
    email: "",
    password: "",
    username: "",
    age: 0,
  };

  const userSubmit = (formdata) => {
    console.log(formdata);

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
          icon: "success",
          title: "Success",
          text: "Registered successfully",
        });
      });
  };

  const myValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });
  return (
    <div>
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <Formik
                      initialValues={userForm}
                      onSubmit={userSubmit}
                      validationSchema={myValidation}
                    >
                      {({ values, handleSubmit, handleChange, errors }) => (
                        <form
                          onSubmit={handleSubmit}
                          className="mx-1 mx-md-4"
                        >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="User name"
                                id="username"
                                value={values.username}
                                onChange={handleChange}
                                helperText={errors.username}
                                error={Boolean(errors.username)}
                                
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                fullWidth
                                variant="outlined"
                                type="email"
                                label="Email Address"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                helperText={errors.email}
                                error={Boolean(errors.email)}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                fullWidth
                                type="password"
                                variant="outlined"
                                label="Password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                helperText={errors.password}
                                error={Boolean(errors.password)}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Age"
                                id="age"
                                value={values.age}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              for="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Button
                type="submit"
                variant="contained"
                className="w-100"
                color="primary"
              >
                Submit
              </Button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://www.pngmart.com/files/21/Tech-Vector-Transparent-PNG.png"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};


export default Signup;
