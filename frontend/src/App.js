import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import User from "./components/user";
import Admin from "./components/admin";
import Main from "./components/main";
import AdminProfile from "./components/admin";
import Signup from "./components/main/signup";
import { Home } from "@mui/icons-material";
import ManageVideo from "./components/user/manageVideo";
import Manageblog from "./components/user/manageBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<AdminProfile />} path="profile" />
        </Route>

        <Route element={<Main />} path="/main">
          <Route element={<Signup />} path="signup" />
          <Route element={<Login />} path="login" />
          <Route element={<Home />} path="home" />
        </Route>

        <Route element={<User />} path="/user">
          <Route element={<ManageVideo />} path="managevideo" />
          <Route element={<Manageblog />} path="manageblog" />
        </Route>
        <Route element={<Navigate to="/main/home" />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
