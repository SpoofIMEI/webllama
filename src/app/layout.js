import { Inter } from "next/font/google";
import "./css/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webllama",
  description: "Self hosted AI website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
