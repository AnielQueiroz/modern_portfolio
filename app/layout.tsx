import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfólio do Aniel",
  description: "Um moderno e minimalista portfólio com Next.js",
  openGraph: {
    title: "Portfólio do Aniel",
    description: "Explore um portfólio moderno e minimalista construído com Next.js.",
    url: "https://anieldev.pro",
    siteName: "Portfólio do Aniel",
    images: [
      {
        url: "https://github.com/AnielQueiroz/modern_portfolio/blob/main/public/banner_port.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Pré-visualização do Portfólio do Aniel",
      },
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio do Aniel",
    description: "Explore um portfólio moderno e minimalista construído com Next.js.",
    images: ["https://github.com/AnielQueiroz/modern_portfolio/blob/main/public/banner_port.png?raw=true"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
