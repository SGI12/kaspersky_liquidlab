import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({subsets: ['latin']})
export const metadata = {
  title: "LiquidLab",
  description: "Welcome to the PCRMobile™ by LiquidLab.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
