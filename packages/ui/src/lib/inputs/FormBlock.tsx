
type FromblockProps ={
    children?: JSX.Element[] | JSX.Element;
    title?: string;
    block?: boolean;
}
export const FormBlock = ({children, title, block= false}: FromblockProps ) => (  
  <div className='text-xl items-start border-slate-200  border-2 rounded-[8px] p-3 m-4 bg-white' >
    <h1 className='mb-4 font-bold w-full'>{title}</h1> 
    <div className={`${block ? 'flex' : 'flex flex-col w-full'  }`}>
      {children }
    </div>           
  </div>       
  );



 
  
  
 