import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress";

export const metadata: Metadata = {
  title: "Practical UI — Interactive Design Guide",
  description:
    "An interactive exploration of UI design principles from Practical UI 2nd Edition. Master fundamentals, color, typography, layout, buttons, forms, and more through hands-on demos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
