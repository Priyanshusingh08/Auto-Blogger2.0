import { VideoCameraBack } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const User = () => {

  const sidebarOptions = [
    {
      name : 'Manage Video',
      icon : <VideoCameraBack />,
      link : '/user/managevideo'
    },
  ]

  return (
    <Sidebar sidebarOptions={sidebarOptions} title="User Dashbaord" >
      <Outlet />
    </Sidebar>
  );
};

export default User;
