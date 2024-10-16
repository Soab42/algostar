import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addSearch } from '../features/silces/filterSlice';

export default function Search() {
  const [searchParams, setSearchParams] = useState('');
  const dispatch = useDispatch();
  let timeID;
  useEffect(() => {
    if (timeID) {
      clearTimeout(timeID);
    }
    // add debounce
    timeID = setTimeout(() => {
      dispatch(addSearch(searchParams));
    }, 500);
    return () => {
      clearTimeout(timeID);
    };
  }, [searchParams]);
  return (
    <div className="ring-1 text-gray-600 flex items-center rounded-full p-2 px-10 bg-gray-200 ring-gray-300 xl:w-96 lg:w-96 md:w-96 w-full">
      <input
        type="text"
        name="search"
        id="search"
        className="outline-none w-full bg-transparent "
        placeholder="Search..."
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      />
      {searchParams ? (
        <AiOutlineClose
          onClick={() => setSearchParams('')}
          className="cursor-pointer text-xl text-gray-600"
        />
      ) : (
        <FaSearch />
      )}
    </div>
  );
}
