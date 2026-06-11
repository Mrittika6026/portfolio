import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrittika Roy — AI Researcher",
  description: "Computer Vision and Multimodal AI researcher. Building systems that understand the world across modalities.",
  openGraph: {
    title: "Mrittika Roy — AI Researcher",
    description: "Computer Vision and Multimodal AI researcher based in Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
