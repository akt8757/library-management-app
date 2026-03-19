"use client";

import { usePathname } from "next/navigation";
import Menu from "./home/Menu";
import { HeroUIProvider } from "@heroui/react";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/dashboard"];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <>
      <HeroUIProvider>
        {!shouldHideNavbar && <Menu />}
        {children}
      </HeroUIProvider>
    </>
  );
}
