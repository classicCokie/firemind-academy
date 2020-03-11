import { default as GistBox } from "react-gist";

export interface IImageProps {
    url: string;
    alt: string;
}

const Image = ({ url, alt }: IImageProps) => (
    <>
        <div className="img-container">
            <img alt={alt} src={url} />
        </div>
        <style jsx>{`
      .img-container {
        width: 100%;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        border: none;
        border-radius: 5px;
        -webkit-box-shadow: rgba(0,0,0,.15) 0 10px 20px;
        box-shadow: rgba(0,0,0,.15) 0 10px 20p
      }
    `}</style>
    </>
);

export default Image;