import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  message,
  Radio,
  Card,
} from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../../Types/Product.type";
import { useMutation } from "@tanstack/react-query";
import { useCreate } from "../../../hooks/useCreate";
const { Option } = Select;

const ProductCreate = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  // const addProduct = async (values: Product) => {
  //   return await axios.post("http://localhost:3001/products", values);
  // };

  // const { mutate } = useMutation({
  //   mutationFn: async (values: Product) => {
  //     return await axios.post("http://localhost:3001/products", values);
  //   },
  //   onSuccess: () => {
  //     alert("Thêm thành công");
  //   },
  // });
  const { mutate } = useCreate("products");
  
  const handleAdd = (value: Product) => {
    mutate(value);
    nav("/admin/products");
  };
  return (
    <Card
      title="Thêm sản phẩm mới"
      bordered={false}
      style={{
        maxWidth: 600,
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <Form form={form} layout="vertical" onFinish={handleAdd}>
        <Form.Item
          label="Tên sản phẩm"
          name="product_name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <Input placeholder="Nhập tên sản phẩm" />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={0}
            placeholder="Nhập giá"
          />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <Input.TextArea placeholder="Nhập mô tả sản phẩm" />
        </Form.Item>

        <Form.Item
          label="Link hình ảnh"
          name="image"
          rules={[{ required: true, message: "Vui lòng nhập link hình ảnh" }]}
        >
          <Input placeholder="Nhập link ảnh" />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="category"
          rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
        >
          <Select placeholder="Chọn danh mục">
            <Option value="Dép">Dép</Option>
            <Option value="Giày thể thao">Giày thể thao</Option>
            <Option value="Giày tây">Giày tây</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Tình trạng hàng"
          name="stock"
          rules={[{ required: true, message: "Vui lòng chọn tình trạng hàng" }]}
        >
          <Radio.Group>
            <Radio value={true}>Còn hàng</Radio>
            <Radio value={false}>Hết hàng</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductCreate;
