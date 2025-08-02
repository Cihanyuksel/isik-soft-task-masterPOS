import React from "react";
import { ThemeToggle } from "../compoenets/ThemeToggle";
import { TfiWorld } from "react-icons/tfi";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <header className="h-24 w-full flex items-center justify-around p-3 bg-white rounded-xl dark:bg-neutral-800 dark:text-white">
      <div className="w-1/2 min-w-[150px] flex flex-col gap-2 p-0 m-0">
        <h1 className="p-0 m-0 text-2xl font-bold text-neutral-800 dark:text-white">
          Products
        </h1>
        <p className="p-0 m-0 text-base text-zinc-500 dark:text-white">
          Manage your products
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-around p-0 m-0 max-sm:hidden">
        <ThemeToggle />
        <div className="">
          <span className="p-0 m-0 w-px h-14 rounded-lg opacity-50 bg-stone-300 block" />
        </div>

        <div className="w-1/4 min-w-[150px] flex items-center justify-center gap-3 p-0 m-0 max-sm:gap-4">
          <div className="w-7 h-7 flex items-center justify-center">
            <TfiWorld size={24} color="#ccc" />
          </div>

          <div className="flex relative items-center p-0 m-0 cursor-pointer">
            <div className="flex relative items-center p-0 m-0 cursor-pointer">
              <div className="w-7 h-7 flex items-center justify-center">
                <IoMdNotificationsOutline size={28} color="#ccc" />
              </div>
            </div>

            <div className="absolute -right-3 top-[-13px] h-[26px] w-[26px] p-0 m-0">
              <div className="p-0 m-0 bg-lime-300 rounded-2xl border-white border-solid border-[3px] h-[26px] w-[26px]" />
              <div className="absolute inset-0 flex items-center justify-center text-[0.725rem] font-semibold text-zinc-900">
                12
              </div>
            </div>
          </div>

          <div className="w-7 h-7 flex items-center justify-center">
            <MdMailOutline size={28} color="#ccc" />
          </div>
        </div>

        <div className="w-1/4 min-w-[200px] flex gap-3 items-center p-0 m-0">
          <div className="flex items-center p-0 m-0">
            <img
              src="./public/profile-image.jpg"
              className="p-0 m-0 object-cover bg-stone-300 h-[55px] rounded-[90px] w-[55px]"
            />
          </div>
          <div className="flex items-center gap-3 p-0 m-0 max-sm:gap-2.5">
            <div className="flex flex-col gap-1 p-0 m-0 max-sm:hidden">
              <div className="p-0 m-0 text-base font-bold text-neutral-800 dark:text-white">
                Patricia Peter
              </div>
              <div className="p-0 m-0 text-sm text-neutral-400">
                Super Admin
              </div>
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
