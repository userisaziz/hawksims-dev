import useScreenSize from "@/hooks/useScreenSize";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const screenSize = useScreenSize();
  const visiblePages = screenSize === "mobile" ? 3 : 5;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    const finalPages = [];


    if (!pageNumbers.includes(1)) {
      finalPages.push(1);
      if (pageNumbers[0] > 2) finalPages.push("...");
    }

    finalPages.push(...pageNumbers);

    if (!pageNumbers.includes(totalPages)) {
      if (pageNumbers[pageNumbers.length - 1] < totalPages - 1)
        finalPages.push("...");
      finalPages.push(totalPages);
    }

    return finalPages;
  };

  const displayedPages = renderPageNumbers();

  return (
    <div className="flex bg-white justify-center items-center space-x-2 my-5 dark:pb-5">
      {/* Previous Page Button */}
      <button
        className={`${
          currentPage === 1 ? "text-gray-400" : "text-darkBlue"
        } p-[10px] flex items-center`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />{" "}
        {screenSize !== "mobile" && <span className="ml-3">Previous</span>}
      </button>

      {/* Page Numbers */}
      {displayedPages.map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-lg ${
            typeof page === "number" && currentPage === page
              ? "bg-darkBlue text-white"
              : "text-gray-500"
          } text-base font-medium`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        className={`${
          currentPage === totalPages ? "text-gray-400" : "text-darkBlue"
        } p-[10px] flex items-center`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        {screenSize !== "mobile" && <span className="mr-3">Next</span>}
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
