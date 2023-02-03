import { ProductCard } from './ProductCard';
import { ProductLine } from './ProductLine';

export default {
  title: 'Product',
};

const obj1 = {
  URL: 'https://www.hellmanns.com/content/dam/unilever/hellmann_s_world/spain/pack_shot/8410127050819.01-41673974-png.png',
  name: 'mayonesa',
  price: 250,
  disponible: 'disponible',
};
export const  ProductCardStory= () => {
  const { URL, name, price, disponible } = obj1;
  return <ProductCard URL={URL} name={name} price={price} disponible={disponible} />;
};

export const ProductLineStory = () => (
  <ProductLine
    id="1"
    title="Mayonesa Hellmann's"
    thumbnail="https://www.hellmanns.com/content/dam/unilever/hellmann_s_world/spain/pack_shot/8410127050819.01-41673974-png.png"
    price={250.2433}
    category={['Queso', 'Gaseosas']}
    available={true}
  />
);
