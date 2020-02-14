import { darkFont } from "../guidelines/Colors";
import { navbarTitle, paragraph } from "../guidelines/Typography";
import Button from "../components/Button";

export interface IBlogPostCardProps {
  title: string;
  description: string;
  date: string;
  onPressed: () => void;
}

const BlogPostCard = ({
  title,
  description,
  date,
  onPressed
}: IBlogPostCardProps) => (
  <>
    <div className="card" onClick={onPressed}>
      <div className="card-title-container">
        <h1>{title}</h1>
      </div>
      <div className="card-description-container">
        <p>{description}</p>
      </div>
      <div className="card-row">
        <div className="card-date-container">
          <p> {date}</p>
        </div>
        <div className="card-button-container">
          <Button label="Read" onPressed={() => console.log("thick!!!")} />
        </div>
      </div>
    </div>

    <style jsx>{`
      h1 {
        font-family: ${navbarTitle.fontFamily};
        font-weight: ${navbarTitle.fontWeight};
        font-size: ${navbarTitle.fontSize};
        color: ${darkFont};
      }
      .card {
        background-color: white;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: #ffffff;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        paddin-top: 10px;
        padding-bottom: 20px;
      }
      .card-title-container {
        width: 100%;
        text-align: left;
      }
      .card-description-container {
        width: 100%;
        text-align: left;
      }
      p {
        font-family: ${paragraph.fontFamily};
        font-weight: ${paragraph.fontWeight};
        font-size: ${paragraph.fontSize};
      }
      .card-row {
        display: flex;
        align-items: flex-end;
        width: 100%;
        justify-content: space-between;
      }
    `}</style>
  </>
);

export default BlogPostCard;
