import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dental Clinic Web System",
  description: "An ERP system for controlling schedule, revenue, expenses, profits and month-end closing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" precedence="default" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Macondo&display=swap" rel="stylesheet"/>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
