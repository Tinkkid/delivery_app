import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const Shop = lazy(() => import("./pages/Shops/Shops.jsx"));
const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
