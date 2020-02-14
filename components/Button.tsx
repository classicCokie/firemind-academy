import { primary, lightFont, primaryHighlighted } from "../guidelines/Colors";
import { navbarTitle } from "../guidelines/Typography";

export interface IButtonProps {
  label: string;
  onPressed: () => void;
}

const Button = ({ label, onPressed }: IButtonProps) => (
  <>
    <div className="button" onClick={onPressed}>
      {label}
    </div>
    <style jsx>{`
      .button {
        background-color: ${primary};
        color: ${lightFont};
        width: 141px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 33px;
        border-radius: 5px;
      }
      .button:hover {
        background-color: ${primaryHighlighted};
        cursor: pointer;
      }
      .button:active {
        background-color: ${primaryHighlighted};
        cursor: pointer;
      }
    `}</style>
  </>
);

export default Button;
