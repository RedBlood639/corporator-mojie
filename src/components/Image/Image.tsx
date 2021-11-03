import React from "react"
// next
import Image from "next/image"
//  type
type ImageComponentProps = {
    src:any
    alt?:string
    width:number
    height:number
}

// --------------------------
const ImageComponent:React.FC<ImageComponentProps> = ({
    src,
    alt = "No Image,Please reload",
    width,
    height
})=>{
    return (
        <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
            layout="intrinsic"
        />
    )
}

export default ImageComponent