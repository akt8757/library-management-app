import { Poppins } from "next/font/google";
import "./globals.css";
import Menu from "@/component/home/Menu";
import { TooltipProvider } from "@/components/ui/tooltip";
import LayoutWrapper from "@/component/LayoutWrapper";
// import CustomProvider from "@/redux/CustomProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Optional: for use with CSS variables
});

export const metadata = {
  title: "Book Nest",
  description: "A library management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TooltipProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </TooltipProvider>
      </body>
    </html>
  );
}
