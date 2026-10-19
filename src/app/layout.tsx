import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soundspace | Learn, create, and share music",
  description: "Explore music lessons, learn from working musicians, and find your own sound.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex flex-col">
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
