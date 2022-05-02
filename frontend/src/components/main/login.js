import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import app_config from "../../config";

const Login = () => {
	const url = app_config.backend_url;
  const loginForm = {
    email: "",
    password: "",
  };
  const loginSubmit = (formdata) => {
    console.log(formdata);

	fetch(url+'/user/authenticate',{
		method : 'POST', 
		body:JSON.stringify(formdata),
		headers : {"Content-Type":"application/json"},
	});
  };
  return (
    <Container
      maxWidth="xs"
      sx={{ height: "90vh", display: "flex", alignItems: "center" }}
    >
      <Card className="w-100">
        <CardMedia
          component="img"
          image="https://wallpaperaccess.com/full/3533193.png"
          height={200}
        ></CardMedia>
        <p className="text-center mt-5 mb-5 h3">Signin Here</p>
        <CardContent>
          <TextField
            error
            className="w-100 mb-4"
            label="Email"
            variant="filled"
            helperText="Invalid Email ID"
          />
          <TextField
            className="w-100 mb-4"
            label="Password"
            variant="filled"
            type="password"
            helperText="Enter correct password"
          />
          <Formik initialValues={loginForm} onSubmit={loginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  error
                  className="w-100 mb-4"
                  label="Email"
                  variant="filled"
                  helperText="Invalid Email ID"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <TextField
                  className="w-100 mb-4"
                  label="Password"
                  variant="filled"
                  type="password"
                  helperText="Enter correct password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />

                
                <Button
                  type="submit"
                  variant="contained"
                  className="w-100"
                  color="error"
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Login;