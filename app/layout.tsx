import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Background } from "@/components/Background";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aurebesh = localFont({
  src: "../public/fonts/aurebesh.otf",
  variable: "--font-aurebesh",
});

export const metadata: Metadata = {
  title: "Alexis Hayat — Full-Stack Developer",
  description:
    "Portfolio of Alexis Hayat, full-stack developer building reliable software across the galaxy. Star Wars fan, TypeScript enthusiast.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon_light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon_light.ico",
        type: "image/vnd",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        type: "image/vnd",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${aurebesh.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Background />
        <div className="relative z-10">
          <TooltipProvider>{children}</TooltipProvider>
        </div>
      </body>
    </html>
  );
}
