import { Button, Card, Form, Input } from "antd";
import React from "react";
import type { Post } from "../../../Types/Post.type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const [form] = Form.useForm();
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (value: Post) => {
      return await axios.post("http://localhost:3001/post", value);
    },
    onSuccess: () => {
      alert("Thêm thành công!!");
    },
  });

  const handleAdd = (value: Post) => {
    mutate(value);
    nav('/admin/posts')
  };
  return (
    <Card title="Thêm bài viết mới" style={{ maxWidth: 600, margin: "0 auto" }}>
      <Form
        form={form}
        layout="vertical"
        name="add_post_form"
        onFinish={handleAdd} // Xử lý sau
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[
            { required: true, message: "Vui lòng nhập tiêu đề bài viết" },
          ]}
        >
          <Input placeholder="Nhập tiêu đề bài viết" />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
        >
          <Input.TextArea rows={6} placeholder="Nhập nội dung bài viết" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm bài viết
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostCreate;
