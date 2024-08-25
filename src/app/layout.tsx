import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@/utils/provider/ReactQueryProvider";
import Image from "next/image";
import event from "../../public/event.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calendar App",
  description: "A simple Task Calendar application built with Next.js",
  icons:'/favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <div className="flex justify-center items-center gap-8 min-h-screen  ">
            {children}
            <Image src={event} alt={"event "} width={500} height={500} className="hidden md:block"/>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
