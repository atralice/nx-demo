import { toFixed, } from "@deli/libs";
import { CategoryPill } from "../common/Pill";

type ProductLineProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  category: string[];
  available: boolean;
};

export const ProductLine = ({
  id,
  title,
  thumbnail,
  price,
  category,
  available,
}: ProductLineProps) => (
  <div>
    <div className="flex flex-row items-center">
      <div className="">
        <img
          className="max-w-[80px] h-auto object-fit"
          src={thumbnail} alt={title} />
      </div>
      <div>
        <div className="text-lg">{title}</div>
        <div>
          <span className="font-bold">${toFixed(price, 2)}</span>
          <span> · </span>
          <span className={available ? 'text-black' : 'text-red'}>{available ? 'Disponible' : 'No disponible'}</span>
        </div>
      </div>
    </div>
    <div className="pl-4">
      {category.map((cat) => <CategoryPill key={cat} label={cat} />)}
    </div>
  </div>
);
