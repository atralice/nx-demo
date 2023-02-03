import { useForm } from "react-hook-form";
import { FormBlock } from "../inputs/FormBlock";
import { TextInput } from "../inputs/TextInput";
import { NumberInput } from "../inputs/NumberInput";
import { ImageUploadBox } from "../inputs/ImageUploadBox";
import { CheckboxInput } from "../inputs/CheckboxInput";
import { Title } from "../typography/Title";
import { Options, RadioGroupInput } from "../inputs/RadioButtonInput";

type ProductFields = {
  name: string;
  description: string;
  file : string[];
  price: number;
  category: string;
  available: boolean;
};

type AddProductFormProps = {
  handleUpload: (image: string) => Promise<void>;
  handleDelete: (image: string) => Promise<void>;
  onSubmit: (data: ProductFields) => void;
  categories?: Options[]; 
};

export const AddProductForm = ({
  handleUpload,
  handleDelete,
  onSubmit,
  categories,
}: AddProductFormProps ) => {
  const { register, handleSubmit } = useForm<ProductFields>();
  return (
        
    <div className="flex w-full flex-col">
      <Title>Add Product</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBlock  title='Name & Description'>
          <TextInput
            register={register}
            rules={{ required: true }}
            name='name'
            label='Nombre'
          />
        </FormBlock>
        <FormBlock>
          <NumberInput
            register={register}
            rules={{ required: true }}
            name='price'
            label="Precio"
          />
        </FormBlock>
        <FormBlock title='Pictures'>
          <ImageUploadBox
            register={register}
            label='file'
            handleUpload={handleUpload}
            handleDelete={handleDelete}
          />
        </FormBlock>
        <FormBlock title='Category'>
          { categories && 
          <RadioGroupInput
            options={categories}
            register={register}
            rules={{ required: true }}
            name='category'
          />
          }
        </FormBlock>
        <FormBlock title='Available'>
          <CheckboxInput
            register={register}
            label='Disponible'
            name='available'
          />
        </FormBlock>
        <div className="flex justify-center align-center">
          <input type="submit" className="text-center border-2 font-bold bg-sky-400 " />
        </div>
      </form>
    </div>
  );};

