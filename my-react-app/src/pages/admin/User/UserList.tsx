import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";

interface User {
  id: number;
  name: string;
  password: string;
  age: number;
  role: string;
}

const fetchUser = async () => {
  const respone = await axios.get("http://localhost:3001/user");
  return respone.data;
};

const UserList = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchUser,
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PassWord",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: User) => (
        <div>
            <Button type="link">Sửa</Button>
            <Button type="link" danger>Xóa</Button>
        </div>
      )
    },
  ];
  return (
    <>
      <Table
        dataSource={users}
        loading={isLoading}
        columns={columns}
        rowKey={"id"}
      />
    </>
  );
};

export default UserList;
