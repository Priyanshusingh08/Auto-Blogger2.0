import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import User from "./components/user";
import Admin from "./components/admin";
import Main from "./components/main";
import AdminProfile from "./components/admin";
import Header from "./components/main/header";
import Signup from "./components/main/signup";

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
        </Route>

        <Route element={<User />} path="/user"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
