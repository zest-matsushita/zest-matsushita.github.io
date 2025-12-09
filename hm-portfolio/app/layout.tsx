import type { Metadata } from "next";
import { Josefin_Sans, Moirai_One, Oswald, Pacifico, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const moiraiOne = Moirai_One({
  weight: "400",
  variable: "--font-moirai-one",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  weight: "400",
  variable: "--font-josefin-sans",
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
  weight: ["300", "400", "500", "700"], // 使用する weight すべて
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--zen-kaku-gothic-new",
});

export const metadata: Metadata = {
  title: "HM Portfolio",
  description: "portfolio site of H_Matsushita",
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
      <body
        className={`${pacifico.variable} ${oswald.variable} ${josefinSans.variable} ${moiraiOne.variable} ${zenKakuGothicNew.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
