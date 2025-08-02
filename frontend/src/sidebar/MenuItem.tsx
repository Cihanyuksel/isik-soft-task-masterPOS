import React from "react";
import { MenuItemType } from "../types";
import { NotificationBadge } from "../compoenets/NotificationBadge";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setActiveId, toggleMenu } from "../features/menu/menuSlice";

interface MenuItemProps {
  item: MenuItemType;
  isCollapsed?: boolean;
  // isActive: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isCollapsed = false,
}) => {
  const dispatch = useAppDispatch();

  // const openMenus = useAppSelector((state) => state.menu.openMenus);
  const isOpen = useAppSelector(
    (state) => state.menu.openMenus[item.id] ?? false
  );

  const activeId = useAppSelector((state) => state.menu.activeId);

  const isActive = activeId === item.id;

  // const isOpen = openMenus[item.id] || false;
  const handleClick = () => {
    if (activeId !== item.id) {
      dispatch(setActiveId(item.id));
    }
    if (item.children?.length) {
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
          {!isCollapsed && (
            <div
              className={`text-lg ${isActive ? "text-white" : "text-zinc-500"}`}
            >
              {item.label}
            </div>
          )}
        </div>

        {!isCollapsed && item.notificationCount && (
          <NotificationBadge count={item.notificationCount} />
        )}
      </div>

      {!isCollapsed && isOpen && item.children && (
        <div className="flex flex-col bg-neutral-100 gap-1.5 pl-2.5 dark:bg-neutral-800">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </>
  );
};
