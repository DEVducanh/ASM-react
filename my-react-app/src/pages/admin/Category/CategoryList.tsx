import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { Category } from "../../../Types/Category.type";

const CategoryList = () => {
  const queryClient = useQueryClient();
  const fetchCategories = async (): Promise<Category[]> => {
    const respone = await axios.get("http://localhost:3001/categories");
    return respone.data;
  };

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const deleteCategory = async (id: any) => {
    return await axios.delete(`http://localhost:3001/categories/${id}`);
  };

  const { mutate } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      alert("Xóa thành công");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
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
          alt="Category"
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
      render: (_: any, record: Category) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Link to={`update/${record.id}`} type="link">
            Sửa
          </Link>
          <Button
            onClick={() => {
              if (window.confirm("Bạn có chắc muốn xóa")) {
                mutate(record.id);
              }
            }}
            type="link"
            danger
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Link to={"create"} type="dashed" style={{ margin: 20 }}>
        Thêm danh muc
      </Link>

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
