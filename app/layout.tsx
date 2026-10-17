import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoReply — Instagram uchun aqlli avtomatlashtirish",
  description:
    "Instagram izohlari va kalit so‘zlar uchun javob qoidalarini boshqarish platformasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
