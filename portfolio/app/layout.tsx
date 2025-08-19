import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Text({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Issar Manknojiya - Portfolio",
  description: "Computer Science Student at University of Western Ontario",
  icons : {
    icon: "/gallery/initial.jpg",
  },   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHat.variable} font-dm-sans antialiased`}>
          <div className="portfolio-container min-h-screen">
            {children}
          </div>
      </body>
    </html>
  );
}
