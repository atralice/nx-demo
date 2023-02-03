
type TitleProps = {
  children?: string,
};

export const Title = ({ children } : TitleProps) => <h1 className="mb-4 font-bold indent-8">{children}</h1>;
