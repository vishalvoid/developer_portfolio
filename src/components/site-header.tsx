"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Open Source", href: "/open-source" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://www.twitter.com/vishal_void",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://www.github.com/vishalvoid",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishalvoid",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vishal.void",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.159 5.02.334c-.518.18-.96.42-1.397.858-.437.437-.678.879-.858 1.397-.175.5-.25 1.074-.286 2.021C2.444 5.564 2.431 5.971 2.431 9.592v4.825c0 3.621.013 4.028.048 4.976.036.947.111 1.521.286 2.021.18.518.42.96.858 1.397.437.437.879.678 1.397.858.5.175 1.074.25 2.021.286.947.035 1.354.048 4.976.048h4.825c3.621 0 4.028-.013 4.976-.048.947-.036 1.521-.111 2.021-.286.518-.18.96-.42 1.397-.858.437-.437.678-.879.858-1.397.175-.5.25-1.074.286-2.021.035-.947.048-1.354.048-4.976V9.592c0-3.621-.013-4.028-.048-4.976-.036-.947-.111-1.521-.286-2.021-.18-.518-.42-.96-.858-1.397-.437-.437-.879-.678-1.397-.858-.5-.175-1.074-.25-2.021-.286C16.045.013 15.638 0 12.017 0zM12.017 2.162c3.518 0 3.944.012 5.333.048.925.035 1.448.16 1.789.267.45.174.771.382 1.108.719.337.337.545.658.719 1.108.107.341.232.864.267 1.789.036 1.389.048 1.815.048 5.333s-.012 3.944-.048 5.333c-.035.925-.16 1.448-.267 1.789-.174.45-.382.771-.719 1.108-.337.337-.658.545-1.108.719-.341.107-.864.232-1.789.267-1.389.036-1.815.048-5.333.048s-3.944-.012-5.333-.048c-.925-.035-1.448-.16-1.789-.267-.45-.174-.771-.382-1.108-.719-.337-.337-.545-.658-.719-1.108-.107-.341-.232-.864-.267-1.789-.036-1.389-.048-1.815-.048-5.333s.012-3.944.048-5.333c.035-.925.16-1.448.267-1.789.174-.45.382-.771.719-1.108.337-.337.658-.545 1.108-.719.341-.107.864-.232 1.789-.267 1.389-.036 1.815-.048 5.333-.048z" />
        <path d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Vish.
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <span className="font-bold">Vish.</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-1">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-4 w-4 fill-current" />
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}