import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { data } from "react-router-dom";

export const useList = (url: string) => {
  const fetchProduct = async () => {
    const res = await axios.get(`http://localhost:3001/${url}`);
    return res.data;
  };

  const { data ,isLoading } = useQuery({
    queryKey: [url],
    queryFn: fetchProduct,
  });
  return { data, isLoading };
};
