import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AdminHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const handleLogoutClick = () => {
    localStorage.removeItem("auth");
    router.push("/admin/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-3 py-4 bg-white/80">
        <div className="text-xl text-blue-800 hover:cursor-pointer">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="mb-6 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <button
            className="text-xl text-blue-800 hover:text-blue-500 transition-all duration-200"
            onClick={handleLogoutClick}
          >
            <LogOutIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
