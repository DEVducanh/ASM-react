import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ClientLayout } from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProductList from "./pages/admin/ProductList";
import CategoryList from "./pages/admin/CategoryList";

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
            {/* <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/:id" element={<ProductUpdate />} /> */}
            <Route path="categories" element={<CategoryList />} />
            {/* <Route path="category/add" element={<CategoryAdd />} />
            <Route path="category/:id" element={<CategoryUpdate />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
