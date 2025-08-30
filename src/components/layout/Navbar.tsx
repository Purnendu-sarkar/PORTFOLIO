import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GithubIcon } from "../ui/GithubIcon";
import { LinkedInIcon } from "../ui/LinkedinIcon";
import { useState } from "react";

// Navigation links array
const navigationLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Skills" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 w-full">
        {/* Left side - Mobile Menu + Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        onClick={() => setActiveLink(link.label)}
                        className={`py-1.5 font-medium transition-colors ${
                          activeLink === link.label
                            ? "text-[#8245ec] border-b-2 border-[#8245ec]"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Purnendu</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Sarkar</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>
        </div>

        {/* Navigation menu - Desktop only */}
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="gap-6">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`py-1.5 font-medium transition-colors ${
                    activeLink === link.label
                      ? "text-[#8245ec] border-b-2 border-[#8245ec]"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Purnendu-sarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/purnendusarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <LinkedInIcon size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
