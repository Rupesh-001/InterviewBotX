import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

// Correct variable name
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterviewBotX",
  description: "AI-Powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // Correct usage of monaSans.className
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
