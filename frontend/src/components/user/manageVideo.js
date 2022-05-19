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

const ManageVideo = () => {
  const url = app_config.backend_url;
  const [selFile, setSelFile] = useState("");

  const [videoArray, setVideoArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const videoform = {
    title: "",
    file: "",
    uploadedby: currentUser._id,
  };

  const fetchVideos = () => {
    fetch(url + "/video/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setLoading(false);
          setVideoArray(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const displayVideos = () => {
    if (!loading) {
      return videoArray.map(({ title, file }) => (
        <div className="card mt-5">{title}</div>
      ));
    }
  };

  const videoSubmit = (formdata) => {
    formdata.file = selFile;
    console.log(formdata);

    fetch(url + "/video/add", {
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
    <div className="addvideo-back">
      <Container maxWidth="xs" sx={{ display: "flex", alignItems: "center" }}>
        <Card className="w-100">
          <CardMedia
            component="img"
            image="https://wallpaperaccess.com/full/3533193.png"
            height={200}
          ></CardMedia>
          <p className="text-center mt-5 mb-5 h3">Manage Video</p>
          <CardContent>
            <Formik initialValues={videoform} onSubmit={videoSubmit}>
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
                    label="UploadedBy"
                    variant="filled"
                    type="text"
                    id="password"
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

export default ManageVideo;
