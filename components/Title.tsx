import { h1 } from "../guidelines/Typography";

export interface ITitleProps {
  title: string;
}

const Title = ({ title }: ITitleProps) => (
  <>
    <div className="title-container">
      <h1>{title}</h1>
    </div>
    <style jsx>{`
      .title-container {
        width: 100%;
      }
      h1 {
        font-family: ${h1.fontFamily};
        font-weight: ${h1.fontWeight};
        font-size: ${h1.fontSize};
      }
    `}</style>
  </>
);

export default Title;
