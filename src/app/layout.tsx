import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PMPulse — Your PM Career Launchpad",
  description:
    "Resources, articles, interview prep, competitions, and live sessions for aspiring and transitioning product managers.",
  keywords: ["product management", "PM interview prep", "PM resources", "career switcher"],
  openGraph: {
    title: "PMPulse",
    description: "Your one-stop shop for breaking into Product Management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
