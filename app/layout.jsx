import { Lora, Arsenal, Montez } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora' });
const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-arsenal' });
const montez = Montez({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-montez' });

export const metadata = {
  title: "Terra Restaurant",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${arsenal.variable} ${montez.variable}`}>
      <body>
      <div>
        <Header/>
          {children}
        <Footer/>
      </div>
      </body>
    </html>
  );
}
