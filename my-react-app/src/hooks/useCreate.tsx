import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export const useCreate = (url: string) => {
  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post(`http://localhost:3001/${url}`, values);
    },
    onSuccess: () => {
      alert("Thêm thành công");
    },
    onError: () => {
      alert("Thêm thất bại");
    },
  });

  return mutation;
};
