import { Button, Form, Input, InputNumber } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Brand } from "../../../Types/Brand.type";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const BrandUpdate = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const nav = useNavigate();

  const { data: brand } = useQuery({
    queryKey: ["brands", id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/brands/${id}`);
      return data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (brand) {
      form.setFieldsValue(brand);
    }
  }, [brand, form]);

  const { mutate } = useMutation({
    mutationFn: async (value: Brand) =>
      await axios.put(`http://localhost:3001/brands/${id}`, value),
    onSuccess: () => {
      alert("Cập nhật thành công!");
    },
  });

  const handleUpdate = async (value: Brand) => {
    mutate(value);
    nav("/admin/brands");
  };
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: 600, margin: "0 auto" }}
        onFinish={handleUpdate}
      >
        <Form.Item
          label="Tên thương hiệu"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên thương hiệu" }]}
        >
          <Input placeholder="Nhập tên thương hiệu" />
        </Form.Item>

        <Form.Item
          label="Logo URL"
          name="logo"
          rules={[{ required: true, message: "Vui lòng nhập URL logo" }]}
        >
          <Input placeholder="Dán link ảnh logo vào đây" />
        </Form.Item>

        <Form.Item
          label="Quốc gia"
          name="country"
          rules={[{ required: true, message: "Vui lòng nhập quốc gia" }]}
        >
          <Input placeholder="Nhập quốc gia" />
        </Form.Item>

        <Form.Item
          label="Năm thành lập"
          name="founded"
          rules={[{ required: true, message: "Vui lòng nhập năm thành lập" }]}
        >
          <InputNumber
            placeholder="Nhập năm"
            min={1800}
            max={new Date().getFullYear()}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BrandUpdate;
