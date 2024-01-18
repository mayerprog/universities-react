import { useState, useEffect } from "react";

function useApi(httpClient) {
  const [universities, setUniversities] = useState([]);
  const [searchValue, setSearchValue] = useState("Russian Federation");

  useEffect(() => {
    const search = () => {
      httpClient({
        url: `http://universities.hipolabs.com/search?country=${searchValue}`,
        method: "GET",
      })
        .then((res) => setUniversities(res)) // use instead of setTable
        .catch((err) => console.error(err));
    };
    search();
  }, [searchValue, httpClient]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return { universities, searchValue, handleSearchChange };
}

export default useApi;
