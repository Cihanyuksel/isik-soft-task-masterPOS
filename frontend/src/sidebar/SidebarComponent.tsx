import React, { useState } from "react";
import { MenuSectionType } from "../types";
import { SearchBox } from "./SearchBox";
import { MenuSection } from "./MenuSection";
import { IoIosClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

interface SidebarProps {
  menuSectionsData: MenuSectionType[];
}

export const Sidebar: React.FC<SidebarProps> = ({ menuSectionsData }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  const toggleMobileSidebar = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* Hamburger (only mobile) */}
      <div className="sm:hidden flex justify-end p-4">
        <button className="cursor-pointer" onClick={toggleMobileSidebar}>
          <FiMenu size={32} />
        </button>
      </div>
      {/* END Hamburger (only mobile) */}

      {/* Mobile Sidebar - Top Drop Down */}
      <aside
        className={`
          fixed top-0 left-0 w-full bg-white dark:bg-neutral-800 z-40
          shadow-md transform transition-transform duration-300 ease-in-out sm:hidden 
          ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <header className="flex bg-white items-center justify-between px-4 border-b border-gray-200 h-[80px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black"></div>
            <span className="text-lg font-semibold">LOGO</span>
          </div>
          <button className="cursor-pointer" onClick={toggleMobileSidebar}>
            <IoIosClose size={36} />
          </button>
        </header>

        <nav className="flex flex-col gap-6 px-4 py-4 max-h-[80vh] overflow-y-auto">
          <SearchBox />
          {/* activeId={activeId} propsa gelecek */}
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
          hidden sm:flex flex-col shrink-0 p-0 shadow-2xl
          transition-all dark:bg-neutral-800
          ${isCollapsed ? "w-[5vw]" : "w-[25vw]"}
        `}
      >
        <header className="flex items-center justify-between px-4 border-b border-gray-200 h-[125px] w-full">
          <div className="flex gap-3.5 items-center h-full">
            {!isCollapsed && (
              <>
                <div className="w-10 h-10 rounded-full bg-black"></div>
                <div className="flex flex-col gap-1">LOGO</div>
              </>
            )}
          </div>

          <div className="flex items-center">
            <button onClick={toggleSidebar} className="cursor-pointer">
              {isCollapsed ? <FiMenu size={24} /> : <IoIosClose size={44} />}
            </button>
          </div>
        </header>

        <nav
          className={`h-full flex flex-col gap-8 px-4 pt-0 pb-8 mx-auto overflow-y-auto transition-all duration-300
          ${isCollapsed ? "items-center" : "items-start"}`}
        >
          {!isCollapsed && (
            <div className="mt-9 w-full">
              <SearchBox />
            </div>
          )}
          {/* propsa {/*activeId={activeId}*/}
          {menuSectionsData.map((section, index) => (
            <MenuSection
              key={index}
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
