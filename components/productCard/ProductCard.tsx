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
    <div className="flex flex-col gap-2 p-2 rounded-xl w-70 items-center border border-gray-200 bg-amber-50">
      <Image alt="Product-Image" src={props.image} width={200} height={200} />
      <div className="flex flex-col gap-2">
        <span className="font-bold">{props.title}</span>
        <span>{props.price}$</span>
      </div>
    </div>
  );
}

export default ProductCard;
