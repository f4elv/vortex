import type { Metadata } from "next";
import "./globals.css";
import { Aldrich } from "next/font/google";

export const metadata: Metadata = {
  title: "Vortex",
  description: "A sua agência de desenvolvimento web.",
};

const aldrich = Aldrich({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={aldrich.className}>
      <body className="bg-stone-950 text-stone-100">
        {children}
      </body>
    </html>
  );
}
