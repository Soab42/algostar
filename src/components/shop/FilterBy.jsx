import { AiFillFilter } from 'react-icons/ai';
import { useGetProductsQuery } from '../../features/silces/productsApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../features/silces/filterSlice';
export default function FilterBy() {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const { data: products } = useGetProductsQuery();
  const uniqueCategories = [
    ...new Set(products?.map((product) => product.category)),
  ];
  useEffect(() => {
    dispatch(addFilter(filter));
  }, [filter]);

  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="font-semibold w-40 gap-2 flex items-center">
        <AiFillFilter /> Filter By Category:
      </div>
      <select
        name="filter"
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-white border border-gray-300 text-gray-900 text-sm
  rounded-lg focus:ring-blue-500 focus:border-blue-500 h-10 w-60
  text-center capitalize"
      >
        <option value="all">All</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
