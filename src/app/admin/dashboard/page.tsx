"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectsContent from "./ProjectsContent/ProjectsContent";
import NameContent from "./NameContent/NameContent";
import SubTitleContent from "./SubTitleContent/SubTitleContent";
import AboutMeContent from "./AboutMeContent/AboutMeContent";
import ContactContent from "./ContactContent/ContactContent";
import SkillContent from "./SkillContent/SkillContent";
import { sidebarItems } from "@/utils/sidebar.utils";
import { LogOutIcon } from "lucide-react";
import DashboardContent from "./DashboardContent/DashboardContent";

export default function DashboardPage() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/admin/login");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/admin/login");
  };

  const renderContent = () => {
    switch (activeSidebarItem) {
      case 0:
        return <DashboardContent />;
      case 1:
        return <NameContent />;
      case 2:
        return <SubTitleContent />;
      case 3:
        return <ProjectsContent />;
      case 4:
        return <AboutMeContent />;
      case 5:
        return <ContactContent />;
      case 6:
        return <SkillContent />;
      default:
        return <DashboardContent />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="fixed h-screen bg-white border-r border-gray-200 flex flex-col justify-between p-4">
            <div>
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

              {/* Sidebar Items */}
              <nav className="space-y-1">
                {sidebarItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveSidebarItem(index)}
                    className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeSidebarItem === index
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {/* Icon */}
                    <span className="w-6 h-6 mr-3">{item.icon}</span>

                    {/* Text */}
                    {isSidebarOpen && (
                      <span className="whitespace-nowrap">{item.name}</span>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-6 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <div className="flex justify-center space-y-1">
                <LogOutIcon /> {isSidebarOpen && "Logout"}
              </div>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 ${
            isSidebarOpen ? "" : "ml-20"
          } transition-all duration-300`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
