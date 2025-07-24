import "./globals.css";
import { Raleway } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Vishal Kumar Singh | MERN & TypeScript Engineer | Portfolio",
  description:
    "MERN & TypeScript engineer crafting real-time applications. Experienced in React, Node.js, MongoDB, Socket.io, and modern web development. Available for freelance projects.",
  openGraph: {
    title: "Vishal Kumar Singh | MERN & TypeScript Engineer",
    description:
      "MERN & TypeScript engineer crafting real-time applications. Expert in React, Node.js, MongoDB, Socket.io, and modern web development.",
    url: "https://vishalvoid.com",
    siteName: "vishalvoid.com",
    images: [
      {
        url: "https://vishalvoid.com/images/open-graph.jpg",
      },
      {
        url: "https://vishalvoid.com/images/open-graph.jpg",

        alt: "opengraph image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Kumar Singh | MERN & TypeScript Engineer",
    description:
      "MERN & TypeScript engineer crafting real-time applications. Expert in React, Node.js, MongoDB, Socket.io, and modern web development.",
    images: ["https://vishalvoid.com/images/open-graph.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vishal Kumar Singh",
              "url": "https://www.vishalvoid.com",
              "sameAs": [
                "https://github.com/vishalvoid",
                "https://linkedin.com/in/vishalvoid",
                "https://medium.com/@vishalvoid",
                "https://twitter.com/vishal_void"
              ],
              "jobTitle": "MERN & TypeScript Engineer",
              "description": "Full-stack developer specializing in MERN stack and TypeScript, crafting real-time applications and blockchain-ready solutions",
              "knowsAbout": ["Next.js", "Node.js", "React", "TypeScript", "MongoDB", "Real-time APIs", "Socket.io"],
              "workLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Noida",
                  "addressCountry": "IN"
                }
              }
            })
          }}
        />
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
