import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chat from "../components/Chat";
import Providers from "../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mystical Bookshelf",
  description: "Your bookstore for fantasy and mystery novels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
