import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const fetchProduct = async () => {
  const res = await axios.get("http://localhost:3001/products");
  return res.data;
};

const ProductList = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      sorter: (a: Product, b: Product) => a.id - b.id, // Sắp xếp theo ID
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "product_name",
      key: "name",
      // sorter: (a: Product, b: Product) => a.name.localeCompare(b.name),
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
      title: "Giá",
      dataIndex: "price",
      key: "price",
      // sorter: (a: Product, b: Product) => a.price - b.price,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (_: any, record: Product) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Link to={`/admin/products/${record.id}`} type="link">Sửa</Link>
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
        <Button type="dashed" style={{ margin: 20 }}>
          Thêm sản phẩm
        </Button>
        <Table
          dataSource={products}
          columns={columns}
          rowKey="id"
          loading={isLoading} // Hiển thị spinner khi đang tải
          pagination={{ pageSize: 5 }} // Phân trang, mỗi trang 5 bản ghi
        />
      </div>
    </>
  );
};

export default ProductList;
