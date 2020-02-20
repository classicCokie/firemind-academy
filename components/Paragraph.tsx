import { blogParagraphText } from "../guidelines/Typography";

export interface IParagraphProps {
  text: string;
}

const Paragraph = ({ text }: IParagraphProps) => (
  <>
    <div className="paragraph-container">
      <p>{text}</p>
    </div>
    <style jsx>{`
      .paragraph-container {
        width: 100%;
        text-align: justify;
      }
      p {
        font-family: ${blogParagraphText.fontFamily};
        font-weight: ${blogParagraphText.fontWeight};
        font-size: ${blogParagraphText.fontSize};
        line-height: 28px;
        letter-spacing: 0.1px;
      }
    `}</style>
  </>
);

export default Paragraph;
