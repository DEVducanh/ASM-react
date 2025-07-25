import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";
import React from "react";

const fetchPost = async () => {
  const response = await axios.get("http://localhost:3001/post");
  return response.data;
};

const PostList = () => {
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchPost,
  });
  const columns = [
    { title: "id", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Content", dataIndex: "content", key: "content" },
  ];

  return (
    <>
      <div>
        <Table dataSource={post} columns={columns} rowKey={"id"} loading={isLoading} />
      </div>
    </>
  );
};

export default PostList;
