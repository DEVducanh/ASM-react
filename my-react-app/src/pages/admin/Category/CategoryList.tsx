import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

interface ICategories {
  id: number;
  image: string;
  name: string;
  description: string;
  status: boolean;
}

const fetchCategories = async (): Promise<ICategories[]> => {
  const respone = await axios.get("http://localhost:3001/categories");
  return respone.data;
};

const CategoryList = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const category = searchParam.get("category");

  const handleFilter = () => setSearchParam({ category: "Dép" });

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
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
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: any) => (
        <img
          src={image}
          alt="Product"
          style={{ width: 100, height: "auto", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: ICategories) => (
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
      <Button type="dashed" style={{ margin: 20 }}>
        Thêm sản phẩm
      </Button>
      <button style={{display: "inline-block",backgroundColor: "white"}} onClick={handleFilter}>Lọc theo Dép</button>
      <p style={{display: "inline-block",marginLeft: 20}}>Danh mục hiện tại: {category || "Không có"}</p>
      <Table
        dataSource={categories}
        rowKey={"id"}
        columns={columns}
        loading={isLoading}
        pagination={{ pageSize: 4 }}
      />
    </>
  );
};

export default CategoryList;
