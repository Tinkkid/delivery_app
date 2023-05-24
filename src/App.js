import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

const Shop = lazy(() => import('./pages/Shops/Shops.jsx'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage.jsx'));

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
