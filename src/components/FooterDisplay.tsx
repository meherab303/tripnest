'use client';  // Mark this as a Client Component

import { usePathname } from 'next/navigation';
import Footer from './Footer';


const FooterDisplay = () => {
  const pathname = usePathname();

  // Routes where footer should be hidden
  const hideFooterRoutes = ['/login', '/register','/dashboard'];  
  const isDashboardRoute = pathname.startsWith('/dashboard');

  if (hideFooterRoutes.includes(pathname) || isDashboardRoute) {
    return null;  // Don't render footer on these routes
  }

  return <Footer/> ;
};

export default FooterDisplay;
