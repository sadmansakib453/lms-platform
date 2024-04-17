"use client"

import {UploadDropzone} from "@/lib/uploadthing";
import {ourFileRouter} from "@/app/api/uploadthing/core"
import toast from "react-hot-toast"

const FileUpload = ({onChange, endpoint}) => {


  return (
    <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res)=>{
            onChange(res?.[0].url)
        }}

        onUploadError={(error)=>{
            toast.error(`${error?.message}`);
        }}
    />
  )  
}

export default FileUpload