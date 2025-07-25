import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";

interface Brand {
  id: number;
  name: string;
  country: string;
  logo: string;
  founded: number;
}

const fetchBrand = async () => {
  const respone = await axios.get("http://localhost:3001/brands");
  return respone.data;
};

const BrandList = () => {
  const {
    data: brands,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrand,
  });
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo: any) => (
        <img
          src={logo}
          alt="name"
          style={{ width: 100, height: "auto", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Founded",
      dataIndex: "founded",
      key: "founded",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: Brand) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button type="link">Sửa</Button>
          <Button type="link" danger>
            Xóa
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <Table
          dataSource={brands}
          columns={columns}
          loading={isLoading}
          rowKey={"id"}
        />
      </div>
    </>
  );
};

export default BrandList;
