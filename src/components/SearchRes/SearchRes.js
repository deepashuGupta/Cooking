import SearchCard from "./SearchCard";
import { useState } from "react";
import useSearchRes from "../../utils/useSearchRes";

const SearchRes = () => {
  const [searchResName, setSearchResName] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const list = useSearchRes(searchResName, isSearch, setIsSearch);
  return (
    <>
      <div className="w-6/12 m-auto mt-4">
        <div className="mb-4 flex justify-between">
          <input
            className="px-4 py-2 w-2/3 bg-gray-200 shadow-sm rounded-sm"
            type="text"
            placeholder="Search For Restaurant"
            value={searchResName}
            onChange={(e) => setSearchResName(e.target.value)}
          />
          <button
            className="bg-red-500 px-4 py-2 text-white rounded-md shadow-md"
            onClick={() => setIsSearch(true)}
          >
            Search
          </button>
        </div>
        <hr />
        {list.map((c, i) => {
          let met = c.metadata.split('\\"');
          let resId = JSON.parse(met[0])?.data?.primaryRestaurantId;
          return <SearchCard key={resId} card={c} />;
        })}
      </div>
    </>
  );
};

export default SearchRes;
