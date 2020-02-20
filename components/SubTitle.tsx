import { h3 } from "../guidelines/Typography";

export interface ISubTitleProps {
  title: string;
}

const SubTitle = ({ title }: ISubTitleProps) => (
  <>
    <div className="title-container">
      <h3>{title}</h3>
    </div>
    <style jsx>{`
      .title-container {
        width: 100%;
      }
      h3 {
        font-family: ${h3.fontFamily};
        font-weight: ${h3.fontWeight};
        font-size: ${h3.fontSize};
      }
    `}</style>
  </>
);

export default SubTitle;
