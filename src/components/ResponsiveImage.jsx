import React from "react";

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw",
  loading = "lazy",
  decoding = "async",
  width,
  height,
  ...props
}) => {
  const imageStyle =
    aspectRatio !== "auto"
      ? {
          aspectRatio,
          objectFit: className.includes("object-contain") ? "contain" : "cover",
        }
      : {};

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      style={imageStyle}
      {...props}
    />
  );
};

export default ResponsiveImage; 