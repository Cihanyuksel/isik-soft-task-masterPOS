import React from "react";
import { MenuItemType } from "../types";
import { NotificationBadge } from "../compoenets/NotificationBadge";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setActiveId, toggleMenu } from "../features/menu/menuSlice";

interface MenuItemProps {
  item: MenuItemType;
  isCollapsed?: boolean;
  isActive: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, isCollapsed = false, isActive }) => {
  const dispatch = useAppDispatch();
  const openMenus = useAppSelector((state) => state.menu.openMenus);
  const isOpen = openMenus[item.id] || false;

  const handleClick = () => {
    dispatch(setActiveId(item.id));
    if (item.hasChildren) {
      dispatch(toggleMenu(item.id));
    }
  };

  return (
    <>
      <div
        className={`flex gap-2.5 items-center p-2.5 h-12 rounded-md cursor-pointer transition-all w-full
        ${isActive ? "bg-[#4F56D3] text-white" : ""}
        ${isCollapsed ? "justify-center" : ""}`}
        onClick={handleClick}
      >
        <div className="flex gap-2.5 items-center">
          <div>{item.icon}</div>
          {!isCollapsed && <div className={`text-lg ${isActive ? "text-white" : "text-zinc-500"}`}>{item.label}</div>}
        </div>

        {!isCollapsed && item.notificationCount && <NotificationBadge count={item.notificationCount} />}
      </div>
      {console.log("render") && null}

      {!isCollapsed && isOpen && item.children && (
        <div className="flex flex-col bg-neutral-100 gap-1.5 pl-2.5 dark:bg-neutral-800">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} isCollapsed={isCollapsed} isActive={child.id === item.id} />
          ))}
        </div>
      )}
    </>
  );
};
