import { RegisterOptions, UseFormRegister } from "react-hook-form";


export type GenericInputProps = {
  name: string;
  label: string;
  value?: string | number;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
};

export enum InputTypes {
  Text = 'text',
  Number = 'number',
  Checkbox = 'checkbox',
  Radio = 'radio',
}

export const GenericInput = (type: InputTypes ) => 
  (
    {
      name,
      label,
      placeholder,
      value,
      register,
      rules,
    } : GenericInputProps,
  )  =>(
    <>
      <label className="capitalize">{label}</label>
      <input
        id={label}
        aria-label={label}
        placeholder={placeholder}
        type={type}
        value={value}
        className="w-full border-2 border-slate-300 rounded-[4px]"
        {...register(name, { ...rules })}
      />
    </>
);
