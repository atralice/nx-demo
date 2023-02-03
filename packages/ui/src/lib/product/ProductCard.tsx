type ProductCardProps = {
  URL?: string;
  name: string;
  price: number;
  disponible: string;
};

export const ProductCard = ({ URL, name, price, disponible }: ProductCardProps) => {
  return (
    <div className="p-2.5 flex w-full h-full border-t-2 border-solid border-slate-200 ">
      <img src={URL} alt="osooooo" className="max-w-xs h-auto rounded-lg object-cover" />
      <div className="ml-2 flex flex-col ">
        <span className="text-2xl uppercase">{name}</span>
        <div className="text-ms">
          <span>${price}.00</span>
          <span> · </span>
          <span>{disponible}</span>
        </div>
      </div>
    </div>
  );
};
