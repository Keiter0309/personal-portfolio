"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/Themecontext";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const NavButton = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <Button
    variant="ghost"
    className="text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
    asChild
    onClick={onClick}
  >
    <Link href={href}>{label}</Link>
  </Button>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-blue-950/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          My Portfolio
        </Link>
        <nav className="flex space-x-4">
          <ul className="hidden md:flex md:items-start space-x-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="md:list-none">
                <NavButton href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <NavButton
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onClick={closeSheet}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
