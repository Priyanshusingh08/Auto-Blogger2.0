import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    TextField,
  } from "@mui/material";
  import { Formik } from "formik";
  import { useEffect, useState } from "react";
  import Swal from "sweetalert2";
  import app_config from "../../config";
  
  const Manageblog = () => {
    const url = app_config.backend_url;
    const [selFile, setSelFile] = useState("");
  
    const [blogArray, setblogArray] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem("user"))
    );
  
    const blogform = {
      title: "",
      file: "",
      uploadedby: currentUser._id,
      discription: "",
      data: "",
      thumbnail: "",
    };
  
    const fetchBlog = () => {
      fetch(url + "/blog/getbyuser/" + currentUser._id).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            setLoading(false);
            setblogArray(data);
          });
        }
      });
    };
  
    useEffect(() => {
      fetchblogs();
    }, []);
  
    const displayblogs = () => {
      if (!loading) {
        return blogArray.map(({ title, file }) => (
          <div className="card mt-5">{title}</div>
        ));
      }
    };
  
    const blogSubmit = (formdata) => {
      formdata.file = selFile;
      console.log(formdata);
  
      fetch(url + "/blog/add", {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: { "Content-Type": "application/json" },
      });
    };
  
    const uploadFile = (e) => {
      const file = e.target.files[0];
  
      const fd = new FormData();
      fd.append("myfile", file);
  
      fetch(url + "/util/uploadfile", {
        method: "POST",
        body: fd,
      }).then((res) => {
        if (res.status === 200) {
          console.log("file uploaded");
          setSelFile(file.name);
  
          Swal.fire({
            icon: "success",
            title: "Success!!",
            text: "Successfully loggedin",
          });
        }
      });
    };
  
    return (
      <div className="addblog-back">
        <Container maxWidth="xs" sx={{ display: "flex", alignItems: "center" }}>
          <Card className="w-100">
            <CardMedia
              component="img"
              image="https://wallpaperaccess.com/full/3533193.png"
              height={200}
            ></CardMedia>
            <p className="text-center mt-5 mb-5 h3">Manage blog</p>
            <CardContent>
              <Formik initialValues={blogform} onSubmit={blogSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mb-4"
                      label="Title"
                      variant="filled"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                    <TextField
                      className="w-100 mb-4"
                      label="Discription"
                      variant="filled"
                      type="text"
                      id="discription"
                      value={values.discription}
                      onChange={handleChange}
                    />
                      <TextField
                      className="w-100 mb-4"
                      label="Thumbnail"
                      variant="filled"
                      type="text"
                      id="thumbnail"
                      value={values.thubmbnail}
                      onChange={handleChange}
                    />
                      <TextField
                      className="w-100 mb-4"
                      label="Uploadedby"
                      variant="filled"
                      type="text"
                      id="uploadedby"
                      value={values.uploadedby}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control w-100 mb-4"
                      type="file"
                      onChange={uploadFile}
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
        
      </div>
    );
  };
  
  export default Manageblog;
  