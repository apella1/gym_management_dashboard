"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Gym Management Dashboard</title>
        <meta
          name="description"
          content="Gym management dashboard for gym owners"
        />
      </head>
      <body className={inter.className}>
        {pathname === "/" ? (
          <div>{children}</div>
        ) : (
          <section className="flex min-h-screen">
            <div className="basis-1/5 w-full">
              <Sidebar />
            </div>
            <div className="basis-4/5 w-full">{children}</div>
          </section>
        )}
      </body>
    </html>
  );
}
