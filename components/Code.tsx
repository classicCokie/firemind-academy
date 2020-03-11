import { primary, lightFont, primaryHighlighted } from "../guidelines/Colors";
import { navbarTitle } from "../guidelines/Typography";
import Highlight from 'react-highlight'

export interface ICodeProps {
    code: string;
    language: string;
}

const Code = ({ code, language }: ICodeProps) => (
    <>
        <div className="code-container">
            <pre>
                <code >
                    {code}
                </code>
            </pre>
        </div>
        <style jsx>{`
        .code-container {
            max-width: 100%;
            background-color: #282c34;
            border-radius: 5px;
        }
          pre, code {
            white-space: pre-wrap;
            word-break: break-all;
            padding: 10px 10px 10px;
            color: white;
            border: none;
            border-radius: 5px;
            background-color: #282c34;
            -webkit-box-shadow: rgba(0,0,0,.15) 0 10px 20px;
            box-shadow: rgba(0,0,0,.15) 0 10px 20p
          }
        
    `}</style>
    </>
);

export default Code;
