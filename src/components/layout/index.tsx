import Navbar from './NavBar';
import Footer from './Footer';
import React from 'react';
import Box from '@mui/material/Box';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
}
