import FooterUI from "@/components/FooterUI";
import HeaderUI from "@/components/HeaderUI";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["poppin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ecomm | One Cart Away",
  description: "Start Shopping Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        <HeaderUI />
        {children}
        <FooterUI />
      </body>
    </html>
  );
}
