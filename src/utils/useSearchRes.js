import { useEffect, useState } from "react";
import { SEARCH_URL } from "./constant";

const useSearchRes = (searchResName, isSearch, setIsSearch) => {
  const [searchedResList, setSearchedResList] = useState([]);
  useEffect(() => {
    if (isSearch) {
      fetchResList();
    }
  }, [searchResName, isSearch]);

  const fetchResList = async () => {
    if (searchResName === "") {
      setIsSearch(false);
    } else {
      const data = await fetch(SEARCH_URL + searchResName);
      const json = await data.json();
      const filterRes = json.data.suggestions.filter((query, index) => {
        return query?.type === "RESTAURANT";
      });
      setSearchedResList(filterRes);
      setIsSearch(false);
    }
  };
  return searchedResList;
};

export default useSearchRes;
