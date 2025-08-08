import React from "react";
import { MenuItemType } from "../types";
import { NotificationBadge } from "../compoenets/NotificationBadge";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setActiveId, toggleMenu } from "../features/menu/menuSlice";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface MenuItemProps {
  item: MenuItemType;
  isCollapsed?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isCollapsed = false,
}) => {
  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state) => state.menu.activeId);

  const isOpenChild = useAppSelector(
    (state) => state.menu.openMenus[item.id] ?? false
  );

  const handleClick = () => {
    if (activeId !== item.id) {
      dispatch(setActiveId(item.id));
    }
    if (item.children?.length) {
      dispatch(toggleMenu(item.id));
    }
  };

  const isActive = activeId === item.id;
  const showLabel = !isCollapsed;
  const showNotification = !isCollapsed && item.notificationCount;
  const showArrow = item.children && !isCollapsed;
  const showChildrenMenu = !isCollapsed && isOpenChild && item.children;

  return (
    <>
      <div
        className={`flex gap-2.5 items-center justify-between p-2.5 h-12 rounded-md cursor-pointer transition-all w-full
        ${isActive ? "bg-[#4F56D3] text-white" : ""}
        ${isCollapsed ? "justify-center" : ""}`}
        onClick={handleClick}
      >
        <div className="flex gap-2.5 items-center">
          <div
            className={`text-zinc-500 ${
              isActive ? "dark:text-neutral-400" : ""
            }`}
          >
            {item.icon}
          </div>
          {showLabel && (
            <div
              className={`text-lg dark:text-neutral-400 ${
                isActive ? "text-white" : "text-zinc-500"
              }`}
            >
              {item.label}
            </div>
          )}
        </div>
        {showNotification && (
          <NotificationBadge count={item.notificationCount} />
        )}
        {showArrow &&
          (isOpenChild ? (
            <IoIosArrowUp className="dark:text-neutral-400" />
          ) : (
            <IoIosArrowDown className="dark:text-neutral-400" />
          ))}
      </div>

      {showChildrenMenu && (
        <div className="flex flex-col bg-neutral-100 gap-1.5 pl-2.5 dark:bg-neutral-700 ">
          {item.children?.map((child) => (
            <MenuItem key={child.id} item={child} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </>
  );
};
