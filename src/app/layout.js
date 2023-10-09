import "./globals.css";
import { Raleway } from "next/font/google";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Web & App Development by Vishal Kr Singh | Portfolio | VishalVoid",
  description:
    "Vishal Kumar Singh - Web & App Developer Portfolio | Explore stunning web design, mobile app development, and digital innovation. Hire me for top-tier  solutions.",
  openGraph: {
    title: "Vishal Kumar Singh - Web & App Developer Portfolio",
    description:
      "Explore stunning web design, mobile app development, and digital innovation in Vishal Kumar Singh's portfolio. Hire Vishal for top-tier solutions.",
    url: "https://vishalvoid.com",
    siteName: "vishalvoid.com",
    images: [
      {
        url: "https://vishalvoid.com/images/opengraph.png",
      },
      {
        url: "https://vishalvoid.com/images/opengraph.png",

        alt: "opengraph image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development by Vishal Kr Singh | Portfolio ",
    description:
      "Vishal Kumar Singh - Web & App Developer Portfolio | Explore stunning web design, mobile app development, and digital innovation. Hire Vishal for top-tier web & app solutions.",
    images: ["https://vishalvoid.com/images/opengraph.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
