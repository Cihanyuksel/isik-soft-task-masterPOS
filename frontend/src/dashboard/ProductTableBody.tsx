// ProductTableBody.tsx dosyan
import React from "react";
import { Product } from "../types";
import { tableConfig } from "../utils/tableConfig";

interface ProductTableBodyProps {
  filteredProducts: Product[];
  selectedProducts: number[];
  handleSelectProduct: (id: number) => void;
  isFetching: boolean;
  handleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  allSelected: boolean;
}

const ProductTableBody: React.FC<ProductTableBodyProps> = ({
  filteredProducts,
  selectedProducts,
  handleSelectProduct,
  isFetching,
  allSelected,
  handleSelectAll,
}) => {
  return (
    <table className="table-fixed overflow-x-auto">
      <colgroup>
        {tableConfig.map((col) => (
          <col key={col.key} className={col.className} />
        ))}
      </colgroup>

      <thead className="text-left bg-gray-50 text-neutral-500">
        <tr>
          {tableConfig.map((col) => (
            <th key={col.key} className={`px-4 py-3 ${col.className || ""}`}>
              {col.key === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="w-5 h-5 cursor-pointer"
                  aria-label="Select all products"
                />
              ) : (
                col.label
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="min-h-[500px]">
        {isFetching ? (
          <tr>
            <td colSpan={tableConfig.length}>
              <div className="flex justify-center items-center h-40">
                <div className="loader" />
              </div>
            </td>
          </tr>
        ) : (
          filteredProducts.map((product) => (
            <tr
              key={product._id}
              className="border-b border-neutral-100 hover:bg-gray-50 transition ease-in-out group"
            >
              {tableConfig.map((col) => (
                <td
                  key={col.key}
                  className={`px-4 py-5 ${col.className || ""} ${
                    col.key === "checkbox" &&
                    selectedProducts.includes(product._id)
                      ? "border-l-4 border-indigo-600"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  {col.key === "checkbox" ? (
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product._id)}
                      onChange={() => handleSelectProduct(product._id)}
                      className="cursor-pointer"
                      aria-label={`Select ${product.name}`}
                    />
                  ) : col.renderCell ? (
                    col.renderCell(product)
                  ) : (
                    <span>{product[col.key as keyof Product]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductTableBody;
