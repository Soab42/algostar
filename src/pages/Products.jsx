import ControlList from '../components/shop/ControlList';

import ProductList from '../components/shop/ProductList';

export default function ShopPage() {
  return (
    <div className=" grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
      <div className="col-span-4">
        <ControlList />
        <ProductList />
      </div>
    </div>
  );
}
