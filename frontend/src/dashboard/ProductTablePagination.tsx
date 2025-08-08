import React from "react";

function ProductTablePagination({
  currentPage,
  totalPages,
  setCurrentPage,
  products,
}) {
  const generatePageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const goToFirst = () => setCurrentPage(1);
  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToLast = () => setCurrentPage(totalPages);

  const pageSize = 12; // sayfa başına ürün
  const start = (currentPage - 1) * pageSize + 1;
  const end = start + products.length - 1;

  return (
    <footer className="flex justify-between items-center px-4 sm:px-8 py-4 border-t text-sm text-zinc-500 overflow-x-auto">
      <span className="whitespace-nowrap text-zinc-400">
        Showing&nbsp;
        <span className="text-black">
          {start} - {end}
        </span>
        &nbsp;from&nbsp;
        <span className="text-black">100</span>
      </span>
      <div className="flex gap-1 sm:gap-2">
        {/* İlk sayfa */}
        <button
          onClick={goToFirst}
          disabled={currentPage === 1}
          className="w-9 h-9 rounded-md border bg-white text-zinc-500 border-gray-200 disabled:opacity-50 cursor-pointer"
        >
          «
        </button>

        {/* Önceki sayfa */}
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="w-9 h-9 rounded-md border bg-white text-zinc-500 border-gray-200 disabled:opacity-50 cursor-pointer"
        >
          ‹
        </button>

        {/* Sayfa numaraları */}
        {generatePageNumbers().map((item, index) =>
          item === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="w-9 h-9 flex items-center justify-center"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`w-9 h-9 rounded-md border text-sm cursor-pointer ${
                currentPage === item
                  ? "bg-indigo-600 text-white "
                  : "bg-white text-zinc-500 border-gray-200"
              }`}
            >
              {item}
            </button>
          )
        )}

        {/* Sonraki sayfa */}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="w-9 h-9 rounded-md border bg-white text-zinc-500 border-gray-200 disabled:opacity-50 cursor-pointer"
        >
          ›
        </button>

        {/* Son sayfa */}
        <button
          onClick={goToLast}
          disabled={currentPage === totalPages}
          className="w-9 h-9 rounded-md border bg-white text-zinc-500 border-gray-200 disabled:opacity-50 cursor-pointer"
        >
          »
        </button>
      </div>
    </footer>
  );
}

export default ProductTablePagination;
