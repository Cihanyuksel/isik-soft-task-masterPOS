"use client";
import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import {
  setInitialTheme,
  toggleThemeMode,
} from "../features/layout/layoutSlice";
import { useAppSelector, useAppDispatch } from "../utils/hooks";

export const ThemeToggle: React.FC = () => {
  const theme = useAppSelector((state) => state.layout.theme);
  const dispatch = useAppDispatch();

  const isDark = theme === "dark";

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    dispatch(setInitialTheme(savedTheme));
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, isDark]);

  return (
    <div className="w-1/4 flex justify-center mr-10">
      <div className="w-full flex items-center justify-center">
        <MdOutlineWbSunny size={28} color="#ccc" />
      </div>
      <div className="w-full flex items-center justify-center mr-5">
        <button
          onClick={() => dispatch(toggleThemeMode())}
          className="cursor-pointer "
        >
          <div className="relative w-[91px] h-[91px] flex items-center justify-start bg-transparent">
            <div className="absolute left-[30px] top-[29.5px] w-[58px] h-[30px] rounded-[15px] bg-gray-200"></div>
            <div
              className={`absolute top-[29.5px] w-[32px] h-[30px] rounded-full bg-indigo-600
          shadow-[0_1px_14px_rgba(79,86,211,0.3)] border-2 border-white transition-all duration-300 ease-in-out 
          ${isDark ? "left-[29px]" : "left-[59px]"}`}
            ></div>
          </div>
        </button>
      </div>

      <div className="w-full flex items-center justify-center">
        <IoMoonOutline size={28} color="#ccc" />
      </div>
    </div>
  );
};
