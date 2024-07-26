import ProductItem from "@/components/ProductItem";
import { data } from "@/utils/data";

export default function Home() {
  const { products } = data;
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
