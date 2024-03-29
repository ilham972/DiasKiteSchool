import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Home/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Home/Footer";

const inter = Asap({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dias kite surfing school in srilanka",
  description:
    "Dias kite surfinng school is the place to master the kite surfing skill for adventure lovers, the best kitesurfing school and kite surf center in Sri Lanka! Book kitesurfing lessons and accomendation guide for Eat, Sleep and Kite  directly with Dias! with the best instructors in Kalpitiya Lagoon BOOK A Call NOW and get free guide from dias!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
