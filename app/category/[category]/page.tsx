import ProductCard, {
  ProductCardProps,
} from '@/components/productCard/ProductCard';

async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  return res.json();
}

async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const productData = getProductsByCategory(category);

  const [products] = await Promise.all([productData]);

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

export default CategoryPage;
