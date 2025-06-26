import React from "react";
import { ThemeToggle } from "../compoenets/ThemeToggle";
import { TfiWorld } from "react-icons/tfi";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <header className="h-[105px] flex p-4 bg-white rounded-xl dark:bg-neutral-800 dark:text-white">
      <div className="w-1/2 flex flex-col gap-5 p-0 m-0">
        <h1 className="p-0 m-0 text-2xl font-bold text-neutral-800 dark:text-white">Products</h1>
        <p className="p-0 m-0 text-base text-zinc-500 dark:text-white">Manage your products</p>
      </div>

      <div className="w-1/2 flex gap-3 items-center p-0 m-0 max-sm:hidden">
        <ThemeToggle />

        <span className="p-0 m-0 w-px h-14 rounded-lg opacity-50 bg-stone-300" />

        <div className="w-1/3 flex gap-5 items-center p-0 m-0 max-sm:gap-4">
          <button className="flex items-center p-0 m-0 cursor-pointer">
            <TfiWorld size={28} color="gray" />
          </button>

          <div className="flex relative items-center p-0 m-0 cursor-pointer">
            <IoMdNotificationsOutline size={34} color="gray" />

            <div className="absolute -right-3 top-[-13px] h-[26px] w-[26px] p-0 m-0">
              <div className="p-0 m-0 bg-lime-300 rounded-2xl border-white border-solid border-[3px] h-[26px] w-[26px]" />
              <div className="absolute inset-0 flex items-center justify-center text-[0.725rem] font-semibold text-zinc-900">
                12
              </div>
            </div>
          </div>

          <button className="flex items-center p-0 m-0 cursor-pointer">
            <MdMailOutline size={32} color="gray" />
          </button>
        </div>

        <div className="w-1/2 flex gap-3 items-center p-0 m-0">
          <div className="flex items-center p-0 m-0">
            <div className="p-0 m-0 bg-stone-300 h-[57px] rounded-[90px] w-[57px]" />
          </div>
          <div className="flex gap-6 items-center p-0 m-0 max-sm:gap-2.5">
            <div className="flex flex-col gap-3 p-0 m-0 max-sm:hidden">
              <div className="p-0 m-0 text-base font-bold text-neutral-800 dark:text-white">Patricia Peter</div>
              <div className="p-0 m-0 text-sm text-neutral-400">Super Admin</div>
            </div>
            <button className="cursor-pointer">
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
