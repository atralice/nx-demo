
type PillProps = {
  label: string;
  color: string;
};

export const Pill = ({label, color} : PillProps) => (
  <button
    className={`px-4 py-1 ${color} hover:opacity-80 text-sm font-medium rounded-full text-black cursor-default`}
  >
    {label}
  </button>);


export const CategoryPill = ({ label } : { label: string; }) => <Pill label={label} color="bg-slate-200" />;