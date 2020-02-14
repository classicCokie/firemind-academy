import { lightFont, secondary } from "../guidelines/Colors";
import { navbarTitle } from "../guidelines/Typography";

const Navigation = () => (
  <>
    <div className="navbar">
      <div className="navbar-title-container">
        <span>Firemind Academy</span>
      </div>
    </div>
    <style jsx>{`
      .navbar {
        width: 100%;
        background-color: ${secondary};
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .navbar-title-container {
      }
      span {
        font-family: ${navbarTitle.fontFamily};
        font-weight: ${navbarTitle.fontWeight};
        font-size: ${navbarTitle.fontSize};
        color: ${lightFont};
      }
    `}</style>
  </>
);

export default Navigation;
