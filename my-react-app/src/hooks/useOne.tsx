import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useOne = (url: string, id: string | number) => {
  const { data, isLoading } = useQuery({
    queryKey: [url, id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/${url}/${id}`);
      return data;
    },
    enabled: !!id,
  });

  return {data,isLoading};
};

export default useOne;
