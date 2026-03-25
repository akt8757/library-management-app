"use client";

import { usePathname } from "next/navigation";
import Menu from "./home/Menu";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

export default function LayoutWrapper({ children }) {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();

  const hideNavbarRoutes = pathName.startsWith("/dashboard");

  // const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          {!hideNavbarRoutes && <Menu />}
          {children}
          <Toaster position="top-center" />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}
