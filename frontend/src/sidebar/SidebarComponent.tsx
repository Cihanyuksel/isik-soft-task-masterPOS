import React, { useEffect, useState } from "react";
import { MenuSectionType } from "../types";
import { SearchBox } from "./SearchBox";
import { MenuSection } from "./MenuSection";
import { IoIosClose } from "react-icons/io";
import { FiMenu, FiSearch } from "react-icons/fi";

interface SidebarProps {
  menuSectionsData: MenuSectionType[];
}

export const Sidebar: React.FC<SidebarProps> = ({ menuSectionsData }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  const toggleMobileSidebar = () => setMobileOpen((prev) => !prev);

  // If the screen width is less than 684, the sidebar is disabled.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchTrigger = !isCollapsed ? (
    <div className="w-full mt-5">
      <SearchBox />
    </div>
  ) : (
    <button
      onClick={toggleSidebar}
      className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
    >
      <FiSearch className="text-2xl" />
    </button>
  );

  const sidebarHeaderContent = !isCollapsed ? (
    <>
      <div className="w-10 h-10 rounded-full bg-black"></div>
      <div className="flex flex-col gap-1 dark:text-neutral-200">MasterPOS</div>
    </>
  ) : (
    <div className="w-10 h-10 rounded-full bg-black lg:hidden"></div>
  );

  const toggleIcon = isCollapsed ? (
    <FiMenu className="dark:text-neutral-200" size={24} />
  ) : (
    <IoIosClose className="dark:text-neutral-200" size={44} />
  );

  return (
    <>
      {/* Hamburger Bar (mobile) */}
      <div className="md:hidden justify-end p-4">
        <button className="cursor-pointer" onClick={toggleMobileSidebar}>
          <FiMenu size={32} />
        </button>
      </div>
      {/* END Hamburger Bar (mobile) */}

      {/* Mobile Sidebar - Top Drop Down */}
      <aside
        className={`
          fixed top-0 left-0 w-full bg-white dark:bg-neutral-800 z-40
          shadow-md transform transition-transform duration-300 ease-in-out lg:hidden 
          ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <header className="flex bg-white items-center justify-between px-4 border-b border-gray-200 h-[80px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black"></div>
            <span className="text-lg font-semibold">MasterPOS</span>
          </div>
          <button className="cursor-pointer" onClick={toggleMobileSidebar}>
            <IoIosClose size={36} />
          </button>
        </header>

        <nav className="flex flex-col gap-6 px-4 py-4 max-h-[80vh] overflow-y-auto">
          <button className="mt-9 max-w-full">
            <SearchBox />
          </button>
          {menuSectionsData.map((section, index) => (
            <MenuSection key={index} section={section} isCollapsed={false} />
          ))}
        </nav>
      </aside>
      {/* END Mobile Sidebar - Top Drop Down */}

      {/* Overlay (mobile) */}
      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/40 z-30"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden md:flex flex-col shrink-0 p-0 shadow-2xl
          transition-all dark:bg-neutral-800 px-4
          ${isCollapsed ? "w-[5vw] md:w-[10vw]  " : "w-[20vw]"}
        `}
      >
        <header className="flex items-center justify-between border-b border-gray-200 h-[125px] w-full">
          <div className="flex gap-3.5 items-center h-full">
            {sidebarHeaderContent}
          </div>

          <div className="items-center justify-center w-32 h-32 lg:flex hidden">
            <button onClick={toggleSidebar} className="cursor-pointer">
              {toggleIcon}
            </button>
          </div>
        </header>

        <nav
          className={`h-full w-full flex flex-col gap-5 mt-8 pt-0  mx-auto overflow-y-auto transition-all duration-300
          ${isCollapsed ? "items-center" : "items-start"}`}
        >
          {searchTrigger}

          {menuSectionsData.map((section) => (
            <MenuSection
              key={section.id}
              section={section}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </aside>
      {/*END Desktop Sidebar */}
    </>
  );
};
