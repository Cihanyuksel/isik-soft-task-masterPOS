import React from "react";
import { Product } from "../types";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableBody from "./ProductTableBody";
import ProductTablePagination from "./ProductTablePagination";

interface FilterState {
  searchTerm: string;
  sortOrder: "asc" | "desc" | null;
  category: null | string;
}

interface ProductTableProps {
  products: Product[];
  filteredProducts: Product[];
  selectedProducts: number[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<number[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  refetch: () => void;
  totalPages: number;
  exportToExcel: (data: Product[]) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  filteredProducts,
  selectedProducts,
  setSelectedProducts,
  currentPage,
  setCurrentPage,
  dropdownOpen,
  setDropdownOpen,
  filterState,
  setFilterState,
  isLoading,
  isError,
  isFetching,
  refetch,
  totalPages,
  exportToExcel,
}) => {
  const handleSelectProduct = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const allSelected =
    filteredProducts.length > 0 &&
    selectedProducts.length === filteredProducts.length;
  console.log(selectedProducts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(currentPage);
    setFilterState((prev) => ({ ...prev, searchTerm: e.target.value }));
  };

  if (isLoading) return <p className="p-100">Loading...</p>;
  if (isError)
    return <p className="p-4 text-red-600">Failed to load products.</p>;

  return (
    <section className="flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden dark:bg-neutral-800">
      <ProductTableHeader
        filterState={filterState}
        handleSearch={handleSearch}
        setFilterState={setFilterState}
        refetch={refetch}
        filteredProducts={filterState}
        setDropdownOpen={setDropdownOpen}
        dropdownOpen={dropdownOpen}
        exportToExcel={exportToExcel}
        products={products}
      />
      <ProductTableBody
        filteredProducts={filteredProducts}
        selectedProducts={selectedProducts}
        handleSelectProduct={handleSelectProduct}
        isFetching={isFetching}
        handleSelectAll={handleSelectAll}
        allSelected={allSelected}
      />

      <ProductTablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default ProductTable;
