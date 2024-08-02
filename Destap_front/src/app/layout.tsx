import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="h-20 mt-4 w-full bg-header text-white flex justify-center items-center font-light text-xs">
          Developed by ROD ©
        </footer>
      </body>
    </html>
  );
}
