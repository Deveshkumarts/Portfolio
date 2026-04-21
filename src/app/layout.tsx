import type { Metadata } from "next";
import { Fira_Code, Rajdhani } from "next/font/google";
import "./globals.css";
import MatrixRain from "@/components/MatrixRain";

const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const rajdhani = Rajdhani({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-rajdhani" 
});

export const metadata: Metadata = {
  title: "Devesh Kumar | Cybersecurity Portfolio",
  description: "Securing the digital world, one system at a time. Portfolio of Devesh Kumar, Cybersecurity Enthusiast and Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${firaCode.variable} ${rajdhani.variable} font-[family-name:var(--font-rajdhani)] antialiased bg-[#020617] text-slate-200 relative min-h-screen`}
      >
        <MatrixRain />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
