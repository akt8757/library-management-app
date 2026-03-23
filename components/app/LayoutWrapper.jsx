"use client";

import { usePathname } from "next/navigation";
import Menu from "./home/Menu";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function LayoutWrapper({ children }) {
  const pathName = usePathname();

  const hideNavbarRoutes = pathName.startsWith("/dashboard");

  // const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <>
      <TooltipProvider>
        {!hideNavbarRoutes && <Menu />}
        {children}
        <Toaster position="top-center" />
      </TooltipProvider>
    </>
  );
}
