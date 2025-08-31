"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GithubIcon } from "../ui/GithubIcon";
import { LinkedInIcon } from "../ui/LinkedinIcon";

const navigationLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "education", label: "Education" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string, label: string) => {
    setActiveLink(label);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isScrolled
          ? "bg-[#050414] bg-opacity-70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
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
                {/* Hamburger to X */}
                <svg
                  className="pointer-events-none"
                  width={20}
                  height={20}
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
                    className="origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-40 p-2 md:hidden bg-[#050414] bg-opacity-80 text-white rounded-lg"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <button
                        onClick={() => handleLinkClick(link.href, link.label)}
                        className={`block w-full text-left py-1.5 font-medium transition-colors ${
                          activeLink === link.label
                            ? "text-[#8245ec] border-b-2 border-[#8245ec]"
                            : "text-gray-300 hover:text-[#8245ec]"
                        }`}
                      >
                        {link.label}
                      </button>
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

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="gap-6">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <button
                  onClick={() => handleLinkClick(link.href, link.label)}
                  className={`py-1.5 font-medium transition-colors ${
                    activeLink === link.label
                      ? "text-[#8245ec] border-b-2 border-[#8245ec]"
                      : "text-gray-300 hover:text-[#8245ec]"
                  }`}
                >
                  {link.label}
                </button>
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
