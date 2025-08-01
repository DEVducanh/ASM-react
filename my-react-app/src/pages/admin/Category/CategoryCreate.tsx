import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import React from "react";
import type { Category } from "../../../Types/Category.type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CategoryCreate = () => {
  const [form] = Form.useForm();
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (value: Category) => {
      await axios.post("http://localhost:3001/categories", value);
    },
    onSuccess: () => {
      alert("Thêm thành công !");
    },
  });

  const handleSubmit = (value: Category) => {
    mutate(value);
    nav("/admin/categories");
  };
  return (
    <Form
      form={form}
      layout="vertical"
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Tên danh mục"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập tên danh mục" }]}
      >
        <Input placeholder="Nhập tên danh mục" />
      </Form.Item>

      <Form.Item
        label="Mô tả"
        name="description"
        rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
      >
        <Input.TextArea placeholder="Nhập mô tả danh mục" rows={4} />
      </Form.Item>

      <Form.Item label="Hình ảnh" name="image" valuePropName="file">
        <Input placeholder="Link hình ảnh" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm danh mục
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryCreate;
