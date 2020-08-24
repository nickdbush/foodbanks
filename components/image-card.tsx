import { FunctionComponent } from "react";

const ImageCard: FunctionComponent<{ alt: string; url: string }> = ({
  alt,
  url,
}) => {
  return (
    <>
      <img src={url} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          border-radius: 12px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default ImageCard;
