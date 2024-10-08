import localFont from "next/font/local";
import "./globals.css";
import {cookies} from 'next/headers'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Select the font weights you need
  subsets: ['latin'],      // Specify the subsets, like latin or latin-ext
  style: ['normal', 'italic'], // Optional: Specify styles if needed
  variable: '--mulish-font' // Optional: Assign a CSS variable for easier access
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Combine the font class names to apply both fonts */}
      <body className={`${mulish.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
