import { IconButton } from "../compoenets/IconButton";
import { FiDownload, FiFilter, FiMoreVertical, FiRefreshCw } from "react-icons/fi";
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";

function ProductTableHeader({
  filterState,
  handleSearch,
  setFilterState,
  refetch,
  filteredProducts,
  setDropdownOpen,
  dropdownOpen,
  exportToExcel,
  products,
}) {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200 max-md:flex-col max-md:gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-zinc-200">All Products</h2>
      </div>

      <div className="flex gap-4 items-center max-md:flex-wrap max-md:justify-between">
        <div className="flex gap-3 items-center px-4 py-3 bg-white rounded-lg border border-gray-200">
          <i className="ti ti-search text-base text-zinc-500" />
          <input
            type="text"
            placeholder="Search item"
            className="text-sm border-none text-zinc-500 appearance-none bg-transparent border-0 p-0 m-0 focus:outline-none focus:ring-0"
            value={filterState.searchTerm}
            onChange={handleSearch}
          />
          <button className="cursor-pointer" onClick={() => setFilterState((prev) => ({ ...prev, searchTerm: "" }))}>
            <IconButton
              icon={<IoIosCloseCircleOutline className="text-zinc-500 text-xl" />}
              onClick={() => refetch()}
            />
          </button>
        </div>
        <div className="flex gap-2 relative">
          <IconButton icon={<FiRefreshCw className="text-zinc-500 text-base" />} onClick={() => refetch()} />

          <IconButton
            icon={<FiDownload className="text-zinc-500 text-base" />}
            onClick={() => exportToExcel(products)}
          />

          <div className="relativ">
            <IconButton
              icon={<FiFilter className="text-zinc-500 text-base" />}
              onClick={() => setDropdownOpen((open) => !open)}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                <button
                  className="block cursor-pointer w-full text-left px-4 py-2 text-neutral-700 hover:bg-gray-100"
                  onClick={() => setFilterState((prev) => ({ ...prev, sortOrder: "asc" }))}
                >
                  Fiyat Artan
                </button>
                <button
                  className="block cursor-pointer w-full text-left px-4 py-2 text-neutral-700 hover:bg-gray-100"
                  onClick={() => setFilterState((prev) => ({ ...prev, sortOrder: "desc" }))}
                >
                  Fiyat Azalan
                </button>
                <button
                  className="block cursor-pointer w-full text-left px-4 py-2 text-neutral-700 hover:bg-gray-100"
                  onClick={() => {
                    setFilterState((prev) => ({ ...prev, sortOrder: null }));
                    setDropdownOpen(false);
                  }}
                >
                  X
                </button>
              </div>
            )}
          </div>

          <IconButton icon={<FiMoreVertical className="text-zinc-500 text-base" />} />
        </div>
        <button className="flex items-center justify-between gap-5 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer">
          <IconButton icon={<IoIosAddCircleOutline className="text-indigo-600 text-xl" />} />
          <span>Add New Product</span>
        </button>
      </div>
    </header>
  );
}

export default ProductTableHeader;
