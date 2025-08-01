import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../../Types/Product.type";
import { useList } from "../../../hooks/useList";
import { useDelete } from "../../../hooks/useDelete";

const ProductList = () => {
  const queryClient = useQueryClient();
  // const fetchProduct = async (): Promise<Product[]> => {
  //   const res = await axios.get("http://localhost:3001/products");
  //   return res.data;
  // };

  // const { data: products, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProduct,
  // });

  const { data: products, isLoading } = useList("products");
  const { mutate } = useDelete("products");

  const handleDelete = async (id: any) => {
    if (window.confirm("Bạn có chắc muốn xóa")) {
      mutate(id);
    }
  };

  const columns = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, __: any, index: number) => index + 1, // Sắp xếp theo index
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
      title: "Tình trạng",
      dataIndex: "stock",
      key: "stock",
      render: (stock: boolean) => (stock ? "Còn hàng" : "Hết hàng"),
    },
    {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (_: any, record: Product) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Link to={`/admin/products/update/${record.id}`} type="link">
            Sửa
          </Link>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <Link
          to={"/admin/products/create"}
          type="dashed"
          style={{ margin: 20 }}
        >
          Thêm sản phẩm
        </Link>
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
