// ProductTableContainer.tsx
"use client";
import React, { useMemo, useState } from "react";
import { useGetProductsQuery } from "../services/productApi";
import { exportToExcel } from "../utils/exportToExcel";
import ProductTable from "./ProductTable";

type FilterState = {
  searchTerm: string;
  sortOrder: "asc" | "desc" | null;
  category: null | string;
};

const ProductTableContainer: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterState, setFilterState] = useState<FilterState>({
    searchTerm: "",
    sortOrder: null,
    category: null,
  });

  const { data, isLoading, isError, refetch, isFetching } =
    useGetProductsQuery(currentPage);

  const products = data?.data || [];
  const totalPages = data?.totalPages || 1;

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (filterState.searchTerm) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(filterState.searchTerm.toLowerCase())
      );
    }

    if (filterState.category) {
      filtered = filtered.filter(
        (product) => product.category === filterState.category
      );
    }

    if (filterState.sortOrder === "asc") {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (filterState.sortOrder === "desc") {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, filterState]);

  return (
    <ProductTable
      products={products}
      filteredProducts={filteredProducts}
      selectedProducts={selectedProducts}
      setSelectedProducts={setSelectedProducts}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      dropdownOpen={dropdownOpen}
      setDropdownOpen={setDropdownOpen}
      filterState={filterState}
      setFilterState={setFilterState}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      refetch={refetch}
      totalPages={totalPages}
      exportToExcel={exportToExcel}
    />
  );
};

export default ProductTableContainer;
