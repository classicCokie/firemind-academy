import FireParticles from "../components/FireParticles";
import { useRouter } from "next/router";
import Head from "next/head";
import { navbarTitle, paragraph } from "../guidelines/Typography"
import Button from "../components/Button";

const Home = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:900&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:300&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                    rel="stylesheet"
                ></link>
                <style>{`body {margin: 0 !important;}`}</style>
            </Head>
            <FireParticles />
            <div className="body-container">
                <div className="center-container">
                    <div className="title-container">
                        <h1>Firemind Academy</h1>
                    </div>
                    <div className="logo-container">
                        <img src="https://firemindacademy.z19.web.core.windows.net/img/logo_big.png" height="240px" width="200px" />
                    </div>
                    <div className="subTitle-container">
                        <p>Tech tutorials that are eazy to understand.</p>
                    </div>
                    <div className="button-container">
                        <Button label="Read NOW" onPressed={() => console.log("hey")} />
                    </div>
                </div>


            </div>

            <style jsx>{`
        .body-container {
          background-color: black;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .center-container {
          width: 100%;
        }
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50%;
        }
        img {
          height: 100%;
        }
        .title-container {
          color: white;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30%;
        }
        .button-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

        }
        .subTitle-container {
          color: white;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        h1 {
          font-family: ${navbarTitle.fontFamily};
          font-weight: ${navbarTitle.fontWeight};
          font-size: ${navbarTitle.fontSize};
        }
        p {
          font-family: ${paragraph.fontFamily};
          font-weight: ${paragraph.fontWeight};
          font-size: ${paragraph.fontSize};
          text-align: center;
        }
      `}</style>
        </div>
    );
};

export default Home;
