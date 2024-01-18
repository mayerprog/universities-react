import { useState } from "react";

function usePagination(universities, itemsPerPage) {
  const [activePage, setActivePage] = useState(1);
  const totalItems = universities.length;

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return { activePage, handlePageChange, totalPages };
}

export default usePagination;
