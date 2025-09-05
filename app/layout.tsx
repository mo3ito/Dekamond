import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/providers/ReactQueryProvider";
import StarryBackground from "@/components/dashboard/StarryBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`}
      >
        <StarryBackground />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
