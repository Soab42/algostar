import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../features/selector/selectFilterProducts';

// import EmptyList from '../EmptyList';

export default function ProductList() {
  const products = useSelector(selectFilteredProducts);
  if (!products?.length) {
    return (
      <div className="text-center text-3xl mt-10 ">No products found!</div>
    );
  }
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-2 p-4">
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}
