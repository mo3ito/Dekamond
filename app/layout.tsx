import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/providers/ReactQueryProvider";
import Header from "@/components/ui/header/Header";

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
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
