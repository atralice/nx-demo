import {ChangeEvent, useState } from 'react';

type ImageUploadBoxProps ={
    label: string;
    handleUpload: (imageToUpload: string) => Promise<void>;
    handleDelete: (imageUrl: string) => Promise<void>;
    register?: any;
}
type ImageToUpload = {
    loading: boolean;
    url: string;
    error?: boolean;
    
}

export const ImageUploadBox =  ({
    label,
    handleUpload,
    handleDelete,
    register,
}: ImageUploadBoxProps) => {
    const [picPreview, setPicPreview] = useState<ImageToUpload[]>([])
    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {   
        if (!event.target || !event.target.files || !event.target.files.length)  return;
        const { files } = event.target;
        const fileArray: ImageToUpload[] = Array.from(files).map((file: File) => ({
            url: URL.createObjectURL(file),
            loading: true,
        }));
        // adds the new batch of images to the state, as loading.
        setPicPreview((prevState) => [...prevState, ...fileArray]);
        // fire the upload function for each image.
        const updatePromises = fileArray.map(async (file) => handleUpload(file.url));
        // add a handler for each promise, to update the state with the result once its done.
        updatePromises.map((promise, index) => promise.then(() => {
            const updatedFile = fileArray[index];
            updatedFile.loading = false;
            updatedFile.error = false;
            // find the image in the state array and update it.
            setPicPreview((prevState) => [...prevState.map((file) => file.url === updatedFile.url ? updatedFile : file)]);
        }).catch(() => {
            // handle error when uploading image
            const updatedFile = fileArray[index];
            updatedFile.loading = false;            
            updatedFile.error = true;
            setPicPreview((prevState) => [...prevState.map((file) => file.url === updatedFile.url ? updatedFile : file)]);
        }));
    } 

    const onDeleteImage = async ( e: any, imgUrl: string, error?:boolean) => { 
        e.preventDefault();     
        try {
        // set loading true to the specific image..
        setPicPreview((prevState) => [...prevState.map((file) => file.url === imgUrl ? {...file, loading: true} : file)]);
        if(!error) await handleDelete(imgUrl); 
        setPicPreview((prevState) => [...prevState.filter((photo: ImageToUpload) => photo.url !== imgUrl)]);
      } catch (error) {
        // @todo handle error 
        //handle error when delete image. 
        setPicPreview((prevState) => [...prevState.map((file) => file.url === imgUrl ? {...file, loading: false, error: true} : file)]);
      }
   }
   const getBorderColor = (loading: boolean, error?: boolean) =>{
    if(loading) return "border-slate-200";
    if(error) return 'border-red-200 border-4';
    return 'border-green-300 border-4'
   }
   console.log(picPreview)
return (
  <>    
    <label>{label}</label>   
    {/* // oredenar grid */}
    <input type="file" {...register(label)} onChange={handleInputChange} multiple className="w-full border-2 border-slate-300 rounded-[4px]" />       
    {/* grid grid-flow-col gap-x-3 gap-y-3 */}
        
    <div className='pt-3 flex flex-wrap gap-2'>
       
      {picPreview !== null && (
                picPreview.map( (img:ImageToUpload, index:number ) => (
                  < div className='flex flex-col'>
                    <div key={index} className={`flex relative justify-center w-32 h-32 rounded-md border-2 ${ getBorderColor(img.loading, img.error)}`}>
                      <img  src={img.url} alt="Image_Photo" data-accept=".png" className='object-contain rounded-sm my-1'/> 
                      <button
                        className='absolute top-1 right-2  w-6 h-6  text-xs rounded-full bg-red-500 text-white hover:bg-red-700 transition duration-500 ease-in'                                                  
                        onClick={(e:any) => onDeleteImage(e, img.url, img.error)}
                        disabled={img.loading}
                        >                       
                        X
                      </button>              
                      
                      { img.loading && (                     
                        <svg className='animate-spin h-8 w-8 absolute top-1/2 justify-center' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#141414" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>                       
                        )}
                    </div>                         
                  </div>
                )            
                ))}
    </div>
       
  </>
)   
}