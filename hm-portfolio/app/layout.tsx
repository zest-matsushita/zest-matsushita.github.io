import Loading from "@/app/loading";
import { USER_NAME } from "@/constants/app-configs";
import { LoadingProvider } from "@/providers/loading-provider";
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Josefin_Sans, Limelight, Oswald, Pacifico, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  weight: "400",
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});
const limelight = Limelight({
  weight: "400",
  variable: "--font-lime-light",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  weight: "400",
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal"],
  variable: "--zen-kaku-gothic-new",
});

export const metadata: Metadata = {
  title: "HM Portfolio",
  description: `portfolio site of ${USER_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <GoogleTagManager gtmId={`${process.env.GTM_ID}`} />
      <body
        className={`${pacifico.variable} ${limelight.variable} ${oswald.variable} ${josefinSans.variable} ${zenKakuGothicNew.variable} antialiased scroll-smooth`}
      >
        <LoadingProvider>
          <Loading />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
