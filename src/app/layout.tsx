import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECHO Recruitment | Join the Team",
  description: "Building and managing digital systems for the department. Apply to join our core team at ECHO - ECE Council for Hosting and Operations.",
  metadataBase: new URL("https://echo-recruitment.vercel.app"),
  openGraph: {
    title: "ECHO Recruitment | Join the Team",
    description: "Building and managing digital systems for the department. Apply to join our core team.",
    url: "https://echo-recruitment.vercel.app",
    siteName: "ECHO Recruitment",
    images: [
      {
        url: "/og-image.png", // We should add this image later or use a default one
        width: 1200,
        height: 630,
        alt: "ECHO Recruitment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECHO Recruitment | Join the Team",
    description: "Building and managing digital systems for the department. Apply to join our core team.",
    images: ["/og-image.png"], // Same here
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-zinc-950 text-white selection:bg-blue-500/30`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
