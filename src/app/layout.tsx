import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CartProvider } from "@/context/CartContext";
 
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "UrbanCasa - Modern Furniture",
  description: "Discover beautifully crafted furniture for modern living at UrbanCasa.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MaxWidthWrapper>
          <CartProvider>
            {children}
          </CartProvider>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
