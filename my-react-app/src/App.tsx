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
import UserList from "./pages/admin/UserList";
import BrandList from "./pages/admin/BrandList";
import DashBoard from "./pages/admin/DashBoard";
import ProductUpdate from "./pages/admin/Products/ProductUpdate";
// import các page khác nếu có

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      // { index: true, element: <Home /> },
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
      // { path: "products/add", element: <ProductAdd /> },
      { path: "products/:id", element: <ProductUpdate /> },
      { path: "categories", element: <CategoryList /> },
      // { path: "category/add", element: <CategoryAdd /> },
      // { path: "category/:id", element: <CategoryUpdate /> },
      { path: "users", element: <UserList /> },
      { path: "brands", element: <BrandList /> },
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
