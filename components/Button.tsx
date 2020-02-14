import { primary, lightFont } from "../guidelines/Colors";

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
      }
    `}</style>
  </>
);

export default Button;
