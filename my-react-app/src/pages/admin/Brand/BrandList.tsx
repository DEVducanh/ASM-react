import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import type { Brand } from "../../../Types/Brand.type";

const BrandList = () => {
  const queryClient = useQueryClient();
  const fetchBrand = async () => {
    const respone = await axios.get("http://localhost:3001/brands");
    return respone.data;
  };
  const { data: brands, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrand,
  });

  const handleDelete = async (id: any) => {
    return await axios.delete(`http://localhost:3001/brands/${id}`);
  };

  const { mutate } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      alert("Xóa thành công");
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo: any) => (
        <img
          src={logo}
          alt="name"
          style={{ width: 100, height: "auto", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Founded",
      dataIndex: "founded",
      key: "founded",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: Brand) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Link to={`/admin/brands/update/${record.id}`} type="link">
            Sửa
          </Link>
          <Button
            type="link"
            danger
            onClick={() => {
              const isConfirm = window.confirm("Bạn có chắc muốn xóa không ?");
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
        <div>
          <Link
            to={"/admin/brands/create"}
            type="dashed"
            style={{ margin: 30 }}
          >
            Thêm Thương hiệu
          </Link>
        </div>
        <Table
          dataSource={brands}
          columns={columns}
          loading={isLoading}
          rowKey={"id"}
        />
      </div>
    </>
  );
};

export default BrandList;
