import React from "react";

export const ProductHeader = ({ size = "lg" }: { size: "lg" | "md" }) => {
  const isLg = size === "lg";

  return (
    <div
      className={`${
        isLg
          ? "w-1/2 min-w-[150px] gap-2 p-0 m-0 hidden xl:flex"
          : "w-full flex flex-col gap-1 p-2 md:hidden"
      }`}
    >
      <h1
        className={`${
          isLg ? "text-2xl" : "text-xl"
        } font-bold text-neutral-800 dark:text-white`}
      >
        Products
      </h1>
      <p
        className={`${
          isLg ? "text-base" : "text-sm"
        } text-zinc-500 dark:text-white`}
      >
        Manage your products
      </p>
    </div>
  );
};
