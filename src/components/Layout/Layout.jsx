import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Suspense fallback={<p>load</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
