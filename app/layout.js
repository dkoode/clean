import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import LiveChat from "./components/LiveChat";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export const metadata = {
  title: "Müjde Temizlik",
  description: "Müjde Temizlik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${montserrat.variable} antialiased`}
      >

        <NavBar />
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
