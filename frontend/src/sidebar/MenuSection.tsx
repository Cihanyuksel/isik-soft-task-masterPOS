import React, { useState } from "react";
import { MenuSectionType } from "../types";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  section: MenuSectionType;
  isCollapsed: boolean;
}
export const MenuSection: React.FC<MenuSectionProps> = ({
  section,
  isCollapsed,
}) => {
  return (
    <section className="w-full border-b border-gray-200">
      {!isCollapsed && (
        <h3 className="mb-4 text-base font-bold tracking-wider text-stone-300">
          {section.title}
        </h3>
      )}
      <div className="flex flex-col gap-1.5">
        {section?.items.map((item, index) => (
          <MenuItem key={index} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
    </section>
  );
};
