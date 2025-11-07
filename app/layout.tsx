import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Justin Jonany",
  description:
    "Machine Learning Research Engineer specializing in AI, RAG architectures, and data science."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
