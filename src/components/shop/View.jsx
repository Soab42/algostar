import React, { useEffect, useState } from 'react';
import { FaThList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ViewControl() {
  const searchParams = useSearchParams();
  const router = useNavigate();
  const initialView = 'grid';
  const [view, setView] = useState(initialView);

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set('style', view);
  //   router.(`?${params.toString()}`);
  // }, [view, searchParams]);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="flex gap-2 items-center">
      <span className="font-semibold capitalize">view list:</span>

      <button
        className={`text-xl ${
          view === 'grid' ? 'text-blue-500' : 'text-gray-500'
        }`}
        aria-label="Grid view"
        onClick={() => handleViewChange('grid')}
      >
        <IoGrid />
      </button>
      <button
        className={`text-lg ${
          view === 'list' ? 'text-blue-500' : 'text-gray-500'
        }`}
        aria-label="List view"
        onClick={() => handleViewChange('list')}
      >
        <FaThList />
      </button>
    </div>
  );
}
