import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export const useUpdate = (url: string, id?: string | number) => {
  const updateMutation = useMutation({
    mutationFn: async (values: any) => {
      if (!id) return;
      await axios.put(`http://localhost:3001/${url}/${id}`, values);
    },
    onSuccess: () => alert("Update thanh cong"),
  });

  return updateMutation;
};
