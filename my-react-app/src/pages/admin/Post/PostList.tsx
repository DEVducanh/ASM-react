import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import type { Post } from "../../../Types/Post.type";
import { Link } from "react-router-dom";

const fetchPost = async (): Promise<Post[]> => {
  const response = await axios.get("http://localhost:3001/post");
  return response.data;
};

const PostList = () => {
  const queryClient = useQueryClient();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  const { mutate } = useMutation({
    mutationFn: async (id: any) => {
      return await axios.delete(`http://localhost:3001/post/${id}`);
    },
    onSuccess: () => {
      alert("Xóa thành công");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const columns = [
    {
      title: "STT",
      key: "id",
      render: (_: any, __: any, index: number) => index + 1,
    },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Content", dataIndex: "content", key: "content" },
    {
      title: "Hành động",
      render: (_: any, record: Post) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Link to={`/admin/posts/update/${record.id}`} type="link">
            Sửa
          </Link>
          <Button
            type="link"
            danger
            onClick={() => {
              const isConfirm = window.confirm("Bạn có chắc muốn xóa ?");
              if (isConfirm) {
                mutate(record.id);
              }
            }}
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <Link to={"/admin/posts/create"} type="dashed" style={{ margin: 20 }}>
          Thêm bài viết
        </Link>
        <Table
          dataSource={post}
          columns={columns}
          rowKey={"id"}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default PostList;
