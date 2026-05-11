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
    <div className="flex flex-col gap-2 p-2 rounded-xl w-50 items-center border border-gray-200 bg-stone-100">
      <div className="relative w-full h-70">
        <Image
          className="bg-white p-5 object-contain rounded-lg"
          alt="Product-Image"
          src={props.image}
          fill
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-bold">{props.title}</span>
        <span>{props.price} $</span>
      </div>
    </div>
  );
}

export default ProductCard;
