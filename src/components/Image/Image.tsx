import React from "react";
// next
import Image from "next/image";
// type
type ImageComponentProps = {
  src: any;
  alt?: string;
  width?: number | string;
  height?: number | string;
  mode?: "intrinsic" | "fill";
};

// ----------------------------------------------------
const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = "No Image, Please reload.",
  width,
  height,
  mode = "intrinsic",
}) => {
  return mode == "fill" ? (
    <Image src={src} layout={mode} alt={alt} />
  ) : (
    <Image src={src} alt={alt} width={width} height={height} layout={mode} />
  );
};
export default ImageComponent;
