import Image from 'next/image';

export type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
  category?: string;
};

function ProductCard({ ...props }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full gap-2 w-45 items-center border border-gray-200 bg-stone-100">
      <div className="relative w-full h-70">
        <Image
          className="bg-white p-5 object-contain"
          alt="Product-Image"
          src={props.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
        />
      </div>

      <div className="flex flex-col gap-2 p-2">
        <span className="font-bold">{props.title}</span>
        <span>{props.price} $</span>
      </div>
    </div>
  );
}

export default ProductCard;
