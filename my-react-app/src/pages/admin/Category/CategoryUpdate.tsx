import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Category } from "../../../Types/Category.type";

const CategoryUpdate = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const nav = useNavigate();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3001/categories/${id}`
      );
      return data;
    },
    enabled: !!id,
  });
  useEffect(() => {
    if (categories) {
      form.setFieldsValue(categories);
    }
  }, [categories, form]);

  const { mutate } = useMutation({
    mutationFn: async (value: Category) => {
      await axios.put(`http://localhost:3001/categories/${id}`, value);
    },
    onSuccess: () => {
      alert("Cập nhật thành công");
    },
  });

  const handleSubmit = (values: Category) => {
    mutate(values);
    nav('/admin/categories')
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
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryUpdate;
