import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import type { Brand } from "../../../Types/Brand.type";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

const BrandCreate = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  const { mutate } = useMutation({
    mutationFn: async (values: Brand) => {
      return await axios.post(`http://localhost:3001/brands`, values);
    },
    onSuccess: () => {
      alert("Thành Công");
      nav("/admin/brands");
    },
  });

  const handleAdd = (values: Brand) => {
    mutate(values);
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: 600, margin: "0 auto" }}
        onFinish={handleAdd}
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
            Thêm thương hiệu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BrandCreate;
