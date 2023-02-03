import { Options } from '../inputs/RadioButtonInput';
import { AddProductForm } from './AddProductForm';

export default {
  /* 👇 The title prop is optional. */
  title: 'Forms',
};

const fakeCategories: Options[] = [
  {
    id: '1',
    value: 'Quesos'
  },
  {
    id: '2',
    value: 'Aderezoz'
  },
  {
    id: '3',
    value: 'Items'
  },
];

const uploadImage = (image: string) => {
  const upload = new Promise((resolve, reject) => {
    setTimeout(() => {
      if( Math.random() > 0.5 ) {
        resolve(image);                                                          
      }else {
        reject(image);                          
      }
    }, 4000 + Math.random() * 1000);
  });
  return upload as Promise<void>;
};

export const ProductForm = () => (
  <AddProductForm
    handleDelete={uploadImage}
    handleUpload={uploadImage}
    onSubmit={(data) => console.log(data)}
    categories={fakeCategories}
  />
);
