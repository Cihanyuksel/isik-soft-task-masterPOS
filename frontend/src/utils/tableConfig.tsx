import React from "react";
import { Product } from "../types";
import { StatusBadge } from "../dashboard/StatusBadge";
import { PiDotsThreeCircleThin } from "react-icons/pi";

interface TableColumn {
  key: string;
  label: string | React.ReactNode;
  className?: string;
  renderCell?: (product: Product) => React.ReactNode;
}

export const tableConfig: TableColumn[] = [
  {
    key: "checkbox",
    label: (
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer"
        aria-label="Select all products"
      />
    ),
  },
  {
    key: "product",
    label: "Product",
    renderCell: (product: Product) => (
      <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-12 h-12 rounded-lg bg-neutral-100 object-cover flex-shrink-0"
        />
        <div className="flex flex-col gap-1 overflow-hidden">
          <h4 className="font-semibold dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer truncate ">
            {product.name}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer truncate">
            {product.category}
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "description",
    label: "Description",
    className: "hidden xl:table-cell dark:text-neutral-400",
    renderCell: (product: Product) => product.description,
  },
  {
    key: "price",
    label: "Price",
    className: "dark:text-neutral-400",
    renderCell: (product: Product) => `$${product.price.toFixed(2)}`,
  },
  {
    key: "stock",
    label: "Stock",
    className: "max-lg:hidden dark:text-neutral-400",
    renderCell: (product: Product) => product.stock,
  },
  {
    key: "barcode",
    label: "Barcode",
    className: "max-lg:hidden dark:text-neutral-400",
    renderCell: (product: Product) => product.barcode,
  },
  {
    key: "productCode",
    label: "Product Code",
    className: "max-lg:hidden dark:text-neutral-400",
    renderCell: (product: Product) => product.productCode,
  },
  {
    key: "status",
    label: "Status",
    className: "max-lg:hidden dark:text-neutral-400",
    renderCell: (product: Product) => <StatusBadge status={product.status} />,
  },
  {
    key: "actions",
    label: "Actions",
    className: "hidden sm:block dark:text-neutral-400",
    renderCell: () => (
      <button>
        <PiDotsThreeCircleThin className="text-2xl cursor-pointer" />
      </button>
    ),
  },
];
