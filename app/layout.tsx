import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stems by Seidy | Floral Studio Website Concept",
  description:
    "An independent website concept for Stems by Seidy, featuring floral inspiration and custom bouquet enquiries in the Austin and Pflugerville area.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}