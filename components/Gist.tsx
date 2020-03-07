import { default as GistBox } from "react-gist";

export interface IGistProps {
  url: string;
}

const Gist = ({ url }: IGistProps) => (
  <>
    <div className="gist-container">
      <GistBox title="gist" id={url} />
    </div>
    <style jsx>{`
      .gist-container {
        width: 100%;
        heigth: 500px;
      }
    `}</style>
  </>
);

export default Gist;
