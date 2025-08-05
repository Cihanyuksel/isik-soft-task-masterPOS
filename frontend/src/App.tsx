"use client";

import React from "react";
import { Header } from "./dashboard/Header";
import { StatCards } from "./dashboard/StatCards";
import { menuSections } from "./sidebarMenuData";
import { statCardsData } from "./StatCardData";
import { Sidebar } from "./sidebar/SidebarComponent";
import ProductTableContainer from "./dashboard/ProductTableContainer";

export const App: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      <Sidebar menuSectionsData={menuSections} />
      <div className="w-full flex-1 flex flex-col gap-8 px-6 py-5 bg-[#F6F6F6] max-md:px-4 max-sm:px-2">
        <Header />
        <div className="flex flex-col gap-8">
          <StatCards cards={statCardsData} />
          <ProductTableContainer />
        </div>
      </div>
    </main>
  );
};

export default App;
