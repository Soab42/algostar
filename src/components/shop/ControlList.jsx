import SortBy from './SortBy';
import FilterBy from './FilterBy';
import Search from '../Search';

export default function ControlList() {
  return (
    <div className="flex flex-col gap-5 bg-gray-200  xl:flex-row md:flex-row lg:flex-row xl:justify-end w-full px-4 justify-center">
      <div className="text-3xl  p-2 w-full text-center">Products List</div>
      <div className="xl:hidden lg:hidden md:hidden">
        <Search />
      </div>
      <FilterBy />
      <SortBy />
    </div>
  );
}
