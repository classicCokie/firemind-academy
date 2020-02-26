import { lightFont, secondary } from "../guidelines/Colors";
import { navbarTitle } from "../guidelines/Typography";
import Link from 'next/link'

const Navigation = () => (
  <>
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link href="/">
          <img src="https://firemindacademy.z19.web.core.windows.net/img/logo_big.png" alt="logo" height="50px" width="40px" />
        </Link>

      </div>
      <div className="navbar-title-container">
        <Link href="/">
          <a>Firemind Academy</a>
        </Link>
      </div>

    </nav>
    <style jsx>{`
      .navbar {
        width: 100%;
        background-color: ${secondary};
        height: 80px;
        display: flex;
        align-items: center;
      }
      .navbar-logo-container {
        justify-self: flex-start;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .navbar-title-container {
        justify-self: center;
        font-family: ${navbarTitle.fontFamily};
        font-weight: ${navbarTitle.fontWeight};
        font-size: ${navbarTitle.fontSize};
      }
      a {
        color: ${lightFont};
        text-decoration: none;
      }
    `}</style>
  </>
);

export default Navigation;
