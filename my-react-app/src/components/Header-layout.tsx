import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const HeaderLayout = () => {
  const menuItems = [
    {
      key: "dashboard",
      label: <NavLink to="/admin/dashboard">Trang chủ</NavLink>,
    },
    {
      key: "products",
      label: <NavLink to="/admin/products">Sản phẩm</NavLink>,
    },
    {
      key: "brands",
      label: <NavLink to="/admin/brands">Thương hiệu</NavLink>,
    },
    {
      key: "categories",
      label: <NavLink to="/admin/categories">Danh mục</NavLink>,
    },
    {
      key: "users",
      label: <NavLink to="/admin/users">Người dùng</NavLink>,
    },
    {
      key: "posts",
      label: <NavLink to="/admin/posts">Bài viết</NavLink>,
    },
  ];
  return (
   <Header style={{ background: "#001529", padding: "0 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: 30 }}>
          Admin
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{ flexGrow: 1, justifyContent: "flex-end" }}
        />
      </div>
    </Header>
  );
};

export default HeaderLayout;
