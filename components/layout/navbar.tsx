"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "HOME", href: "#home" },
  { title: "THE LOGS", href: "#logs" },
  { title: "THE STACKS", href: "#stacks" },
  { title: "ABOUT ME", href: "#aboutme" },
];

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  opts: {
    pathname: string;
    router: ReturnType<typeof useRouter>;
  }
) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (opts.pathname !== "/") {
    opts.router.push(`/${href}`);
    return;
  }

  window.location.hash = href;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent font-serif pt-6">
      <div className="container flex h-14 items-center justify-between px-8 md:px-16 mx-auto max-w-7xl">
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex w-full items-center justify-end border-none">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-8 w-8 text-white" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-zinc-800">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="my-16 flex flex-col space-y-8 items-center text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={(e) => {
                      scrollToSection(e, link.href, { pathname, router });
                      setIsOpen(false);
                    }}
                    className="text-white/60 hover:text-white transition-opacity duration-300 text-2xl tracking-widest uppercase font-serif"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full justify-center items-center">
          <nav className="flex w-full justify-between items-center px-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, { pathname, router })}
                className="text-white text-lg lg:text-xl tracking-[0.2em] font-serif hover:opacity-70 transition-opacity duration-300"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
