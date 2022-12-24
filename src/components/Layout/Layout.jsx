import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from "components/Box/Box";

export const Layout = () => {
  return (
      <Box maxWidth="960px" m='0 auto' p='0 16px'>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Box>
  );
};


