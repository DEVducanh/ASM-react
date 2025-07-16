import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const HeaderLayout = () => {
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
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Quản lý Shop
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["products"]}
          style={{ flexGrow: 1, justifyContent: "flex-end" }}
        >
          <Menu.Item key="products">
            <NavLink to="/admin/products">Sản phẩm</NavLink>
          </Menu.Item>
          <Menu.Item key="categories">
            <NavLink to="/admin/categories">Danh mục</NavLink>
          </Menu.Item>
          <Menu.Item key="users">
            <NavLink to="/admin/users">Người dùng</NavLink>
          </Menu.Item>
          <Menu.Item key="brands">
            <NavLink to="/admin/brands">Thương hiệu</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderLayout;
