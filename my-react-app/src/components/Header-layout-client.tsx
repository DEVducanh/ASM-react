import React from "react";
import "antd";
import { Layout, Menu, Button, Grid } from "antd";
const { useBreakpoint } = Grid;
const { Header } = Layout;

const menuItems = [
  { key: "products", label: "Products" },
  { key: "about", label: "About us" },
];
const Headerlayoutclient = () => {
  const screens = useBreakpoint();
  return (
    <>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: 18,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Kobako
        </div>
        {screens.md && (
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{
              borderBottom: "none",
              fontSize: 14,
              color: "#6b7280",
              fontWeight: "400",
              fontFamily: "'Playfair Display', serif",
              flex: 1,
              marginLeft: 32,
            }}
            selectable={false}
          />
        )}
        {screens.md && (
          <div style={{ display: "flex", gap: 12 }}>
            <Button
              type="primary"
              style={{
                backgroundColor: "#f97316",
                borderColor: "#f97316",
                fontWeight: 600,
                fontSize: 12,
                borderRadius: 6,
                padding: "6px 16px",
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ea580c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f97316")
              }
            >
              Đăng ký
            </Button>

            <Button
              type="default"
              style={{
                borderColor: "#f97316",
                color: "#f97316",
                fontWeight: 600,
                fontSize: 12,
                borderRadius: 6,
                padding: "6px 16px",
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f97316";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#f97316";
              }}
            >
              Đăng nhập
            </Button>
          </div>
        )}
      </Header>
    </>
  );
};

export default Headerlayoutclient;
