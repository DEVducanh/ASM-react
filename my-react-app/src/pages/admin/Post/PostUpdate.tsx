import { Button, Card, Form, Input } from "antd";
import React, { useEffect } from "react";
import type { Post } from "../../../Types/Post.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PostUpdate = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const nav = useNavigate();
  const { data: Post, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/post/${id}`);
      return data;
    },
  });

  useEffect(() => {
    if (Post) {
      form.setFieldsValue(Post);
    }
  }, [Post, form]);

    const { mutate } = useMutation({
      mutationFn: async (value: Post) => {
        return await axios.put(`http://localhost:3001/post/${id}`, value);
      },
      onSuccess: () => {
        alert("Cập nhật thành công!!");
      },
    });

    const handleUpdate = (value: Post) => {
      mutate(value);
      nav("/admin/posts");
    };
  return (
    <Card title="Sửa Bài viết" style={{ maxWidth: 600, margin: "0 auto" }}>
      <Form
        form={form}
        layout="vertical"
        name="add_post_form"
        onFinish={handleUpdate}
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
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostUpdate;
