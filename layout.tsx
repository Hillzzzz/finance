import type { Metadata } from "next";
import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmplexserif =IBM_Plex_Serif({
  subsets:["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["400","700"],

});

export const metadata: Metadata = {
  title: "HILLS",
  description: "HILLS HELPS YOU BANK",
  icons: "/icons/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmplexserif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
