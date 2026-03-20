"use client";

import { usePathname } from "next/navigation";
import Menu from "./home/Menu";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/dashboard"];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <Menu />}
      {children}
    </>
  );
}
