import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export const useDelete = (url: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string | number) => {
      return await axios.delete(`http://localhost:3001/${url}/${id}`);
    },
    onSuccess: () => {
      alert("xóa thành công");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return mutation;
};
