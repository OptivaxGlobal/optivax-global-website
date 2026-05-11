import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";
import CustomCursor from './CustomCursor'; 
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const location = useLocation();

  // ✅ Scroll top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0C0D0D] text-white overflow-x-hidden flex flex-col">
      
      {/* Cursor */}
      <CustomCursor />
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />

      {/* WhatsApp Floating Button (ALWAYS LAST) */}
      <WhatsAppButton />
      
    </div>
  );
};

export default Layout;