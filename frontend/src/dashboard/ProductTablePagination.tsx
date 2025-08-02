import { useEffect } from "react";
import React from "react";
function ProductTablePagination({ currentPage, totalPages, setCurrentPage }) {
  useEffect(() => {
    window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
  }, [currentPage]);

  return (
    <footer className="flex justify-between items-center px-8 py-4 border-t text-sm text-zinc-500">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex gap-2 overflow-x-auto">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-9 h-9 rounded-md border text-sm cursor-pointer ${
              currentPage === page
                ? "bg-indigo-600 text-white"
                : "bg-white text-zinc-500 border-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </footer>
  );
}

export default ProductTablePagination;
