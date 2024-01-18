import React from "react";
import $ from "jquery";
import Pagination from "./Pagination";
import useApi from "./hooks/useApi";
import useTable from "./hooks/useTable";
import usePagination from "./hooks/usePagination";

function App() {
  const { universities, searchValue, handleSearchChange } = useApi($.ajax);
  const { renderTable } = useTable();
  const itemsPerPage = 10;
  const { activePage, handlePageChange, totalPages } = usePagination(
    universities,
    itemsPerPage
  );

  const start = itemsPerPage * (activePage - 1);
  const end = start + itemsPerPage;
  const displayedUniversities = universities.slice(start, end);

  return (
    <div>
      <label htmlFor="search">Поиск</label>
      <br />
      <input
        id="search"
        onChange={handleSearchChange}
        type="text"
        value={searchValue}
      />
      <div>{renderTable(displayedUniversities)}</div>
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
