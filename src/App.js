import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { Cart, Home } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
