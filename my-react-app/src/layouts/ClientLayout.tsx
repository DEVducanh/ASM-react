import React from "react";
import { Outlet } from "react-router-dom";
import Headerlayoutclient from "../components/Header-layout-client";
import { Layout } from "antd";

export const ClientLayout = () => {
  return (
    <Layout>
      <Headerlayoutclient />
      <Outlet />
    </Layout>
  );
};
