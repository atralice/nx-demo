
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { GenericInput, InputTypes } from "./GenericInput";

export type Options = {
  value: string;
  id: string;
}

type RadioButtonProps = {
  options: Options[], 
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
};

const RadioButtonInput = GenericInput(InputTypes.Radio);

export const  RadioGroupInput = (
  (
    {  
      options,
      register,
      rules,
      name,
    } : RadioButtonProps
  )  => (
    <>
      {options.map((option) => <RadioButtonInput
        register={register}
        rules={rules}
        name={name}
        label={option.value}
        value={option.id}
      />)}
    </>
));
