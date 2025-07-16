import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface ICategories {
  id: number;
  image: string;
  name: string;
  description: string;
  status: boolean;
}

const fetchCategories = async () => {
  const respone = await axios.get("http://localhost:3001/categories");
  return respone.data;
};

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  return <div>CategoryList</div>;
};

export default CategoryList;
