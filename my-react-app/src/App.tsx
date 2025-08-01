import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ClientLayout } from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProductList from "./pages/admin/Products/ProductList";
import CategoryList from "./pages/admin/Category/CategoryList";
import UserList from "./pages/admin/User/UserList";
import BrandList from "./pages/admin/Brand/BrandList";
import DashBoard from "./pages/admin/DashBoard";
import ProductUpdate from "./pages/admin/Products/ProductUpdate";
import ProductCreate from "./pages/admin/Products/ProductCreate";
import PostList from "./pages/admin/Post/PostList";
import Home from "./pages/client/Home";
import BrandCreate from "./pages/admin/Brand/BrandCreate";
import BrandUpdate from "./pages/admin/Brand/BrandUpdate";
import CategoryCreate from "./pages/admin/Category/CategoryCreate";
import CategoryUpdate from "./pages/admin/Category/CategoryUpdate";
import PostCreate from "./pages/admin/Post/PostCreate";
import PostUpdate from "./pages/admin/Post/PostUpdate";
// import các page khác nếu có

const router = createBrowserRouter([
  { path: "/", index: true, element: <Navigate to={"client"} /> },
  {
    path: "/client",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Navigate to={"home"} replace /> },
      { path: "home", element: <Home /> },
      // { path: "product/:id", element: <ProductDetail /> }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to={"dashboard"} replace /> },
      { path: "dashboard", element: <DashBoard /> },
      { path: "products", element: <ProductList /> },
      { path: "products/create", element: <ProductCreate /> },
      { path: "products/update/:id", element: <ProductUpdate /> },
      { path: "categories", element: <CategoryList /> },
      { path: "categories/create", element: <CategoryCreate /> },
      { path: "categories/update/:id", element: <CategoryUpdate /> },
      { path: "users", element: <UserList /> },
      { path: "brands", element: <BrandList /> },
      { path: "brands/create", element: <BrandCreate /> },
      { path: "brands/update/:id", element: <BrandUpdate /> },
      { path: "posts", element: <PostList /> },
      { path: "posts/create", element: <PostCreate /> },
      { path: "posts/update/:id", element: <PostUpdate /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
