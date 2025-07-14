import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ClientLayout } from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProductList from "./pages/admin/ProductList";
import ProductAdd from "./pages/admin/ProductAdd";
import { ProductUpdate } from "./pages/admin/ProductUpdate";
import CategoryUpdate from "./pages/admin/CategoryUpdate";
import CategoryList from "./pages/admin/CategoryList";
import CategoryAdd from "./pages/admin/CategoryAdd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* CLIENT ROUTER */}
          <Route path="/" element={<ClientLayout />}>
            {/* <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} /> */}
          </Route>

          {/* ADMIN ROUTER */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="products" element={<ProductList />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/:id" element={<ProductUpdate />} />
            <Route path="category" element={<CategoryList />} />
            <Route path="category/add" element={<CategoryAdd />} />
            <Route path="category/:id" element={<CategoryUpdate />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
