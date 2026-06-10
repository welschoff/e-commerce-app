import ProductCard, {
  ProductCardProps,
} from '@/components/productCard/ProductCard';

export default async function Home() {
  const data = await fetch('https://fakestoreapi.com/products');
  const products = await data.json();

  return (
    <div className="flex flex-wrap justify-center gap-3 py-5">
      {products.map((product: ProductCardProps) => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
}
