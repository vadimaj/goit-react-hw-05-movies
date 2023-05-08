import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
