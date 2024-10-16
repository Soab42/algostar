import React, { useEffect, useState } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addSort } from '../../features/silces/filterSlice';

export default function SortBy() {
  const [selectedSortOption, setSelectedSortOption] = useState('relevance');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSort(selectedSortOption));
  }, [selectedSortOption]);

  return (
    <div className="flex gap-2 justify-between items-center capitalize text-center">
      <div className="font-semibold gap-2 w-32 flex items-center">
        <AiOutlineSortAscending className="text-xl text-purple--600" /> sort by:
      </div>
      <select
        name="view"
        id="view"
        value={selectedSortOption}
        onChange={(e) => setSelectedSortOption(e.target.value)}
        className="bg-white w-40 text-center capitalize w-60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-10 w-[150px] w-full"
      >
        <option value="relevance">relevance</option>
        <option value="priceasc">price (Low to High)</option>
        <option value="pricedesc">price (High to Low)</option>
        <option value="rating">ratings</option>
      </select>
    </div>
  );
}
