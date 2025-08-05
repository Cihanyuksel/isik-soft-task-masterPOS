import React from "react";
import { Product } from "../types";
import { StatusBadge } from "./StatusBadge";
import { PiDotsThreeCircleThin } from "react-icons/pi";

interface ProductTableContentProps {
  filteredProducts: Product[];
  selectedProducts: number[];
  handleSelectProduct: (id: number) => void;
  isFetching: boolean;
  handleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  allSelected: boolean;
}

const ProductTableBody: React.FC<ProductTableContentProps> = ({
  filteredProducts,
  selectedProducts,
  handleSelectProduct,
  isFetching,
  allSelected,
  handleSelectAll,
}) => {
  return (
    <table className="w-full table-fixed overflow-x-auto">
      <colgroup>
        <col className="w-[50px]" />
        <col className="w-[150px]" />
        {/* <col className="w-[150px]" />  */}
        <col className="w-[80px]" />
        <col className="w-[60px]" />
        <col className="w-[100px]" />
        <col className="w-[80px]" />
        <col className="w-[100px]" />
        <col className="w-[100px]" />
      </colgroup>

      <thead className="text-left bg-gray-50 text-neutral-500">
        <tr>
          <th className="px-4 py-3">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={handleSelectAll}
              className="w-5 h-5 cursor-pointer"
              aria-label="Select all products"
            />
          </th>
          <th className="px-4 py-3 max-sm:w-full">Product</th>
          {/* <th className="px-4 py-3">Description</th> */}
          <th className="px-4 py-3">Price</th>
          <th className="px-4 py-3 max-sm:hidden">Stock</th>
          <th className="px-4 py-3 max-sm:hidden">Barcode</th>
          <th className="px-4 py-3 max-sm:hidden">Product Code</th>
          <th className="px-4 py-3 max-sm:hidden">Status</th>
          <th className="px-4 py-3 max-sm:hidden">Actions</th>
        </tr>
      </thead>

      <tbody className="min-h-[500px]">
        {isFetching ? (
          <tr>
            <td colSpan={9}>
              <div className="flex justify-center items-center h-40">
                <div className="loader" />
              </div>
            </td>
          </tr>
        ) : (
          filteredProducts.map((product) => (
            <tr
              key={product.id}
              className="border-b border-neutral-100 hover:bg-gray-50 transition ease-in-out group"
            >
              <td
                className={`px-4 py-5 ${
                  selectedProducts.includes(product.id)
                    ? "border-l-4 border-indigo-600"
                    : "border-l-4 border-transparent"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleSelectProduct(product.id)}
                  className="cursor-pointer"
                />
              </td>

              <td className="px-4 py-5 flex items-center gap-3 overflow-hidden whitespace-nowrap">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg bg-neutral-100 object-cover flex-shrink-0"
                />
                <div className="flex flex-col gap-1 overflow-hidden">
                  <h4 className="font-semibold dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer truncate">
                    {product.category}
                  </p>
                </div>
              </td>

              {/* <td className="max-w-[250px] px-4 py-5 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis ">
                {product.description}
              </td> */}
              <td className="px-4 py-5 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis max-sm:hidden">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-4 py-5 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis max-sm:hidden">
                {product.stock}
              </td>
              <td className="max-w-[120px] px-4 py-5 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis max-sm:hidden">
                {product.barcode}
              </td>
              <td className="max-w-[120px] px-4 py-5 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis max-sm:hidden">
                {product.productCode}
              </td>
              <td className="px-4 py-5 dark:text-zinc-300 group-hover:dark:text-zinc-700 cursor-pointer overflow-hidden whitespace-nowrap max-sm:hidden">
                <StatusBadge status={product.status} />
              </td>

              <td className="px-4 py-5 text-center max-sm:hidden">
                <button>
                  <PiDotsThreeCircleThin className="text-2xl cursor-pointer" />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductTableBody;
