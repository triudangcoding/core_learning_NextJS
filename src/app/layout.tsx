import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// const roboto = Roboto({ subsets: ["vietnamese"], weight: ["500", "300"] });

const roboto = localFont({
  src: [
    {
      path: "./Roboto-BoldItalic.ttf",
      weight: "400",
    },
    {
      path: "./Roboto-Italic.ttf",
      weight: "700",
    },
    {
      path: "./Roboto-Thin.ttf",
      weight: "400",
    },
  ],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
