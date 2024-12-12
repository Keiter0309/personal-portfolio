"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/Themecontext";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = () => (
    <>
      <li>
        <Button
          variant="ghost"
          className="text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          asChild
        >
          <Link href="/#about">About</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="ghost"
          className="text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          asChild
        >
          <Link href="/#skills">Skills</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="ghost"
          className="text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          asChild
        >
          <Link href="/#projects">Projects</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="ghost"
          className="text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          asChild
        >
          <Link href="/#contact">Contact</Link>
        </Button>
      </li>
    </>
  );

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
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4">
            <NavItems />
          </ul>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
