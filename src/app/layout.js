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
  title: "Best Software Developer Portfolio | Vishalvoid | Vishal KR Singh",
  description:
    "Explore Vishal's best software developer portfolio - showcasing expertise in web & app development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Vishal Kr Singh | Web & App Developer"
        />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
