import React from "react";

function Pagination({ activePage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={number === activePage ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
