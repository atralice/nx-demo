
type NetWorkIconProps ={    
    to: string;
    icon?: string;
}
  export const NetWorkIcon = ({ to, icon }:NetWorkIconProps) =>(
    <div className="bg-slate-200 flex m-2 p-2 ">
      <a href={to} className=' w-10 h-10'>
        <img src={icon} alt="some link" />                                 
      </a>         
    </div>
);


  