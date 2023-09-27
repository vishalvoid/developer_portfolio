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
    "Explore Vishal KR Singh's best software developer portfolio - showcasing expertise in web & app development. Discover innovative projects, skills, and achievements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
