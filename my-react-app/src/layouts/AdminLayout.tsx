import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/Header-layout";

const AdminLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  );
};

export default AdminLayout;
