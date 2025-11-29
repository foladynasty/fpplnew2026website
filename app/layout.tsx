import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Financial Perspectives | Singapore's Premier Financial Education Provider",
  description: "Singapore's CFP® pioneer since 1999. Trusted by 20,000+ professionals. Offering CFP® certification, SCFP-HNWI advanced certification, and CPD courses.",
  keywords: "CFP certification Singapore, financial planning courses, wealth management training, HNWI advisory, IBF approved courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}


