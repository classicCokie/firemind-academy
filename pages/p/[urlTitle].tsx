import createPage from "../../services/createPage";
import blogPosts from "../../data/posts";
import Navigation from "../../components/Navigation";
import Head from "next/head";
import { secondary, lightFont, darkFont, grey } from "../../guidelines/Colors";
import { h1, smallBold, small } from "../../guidelines/Typography";

const Page = props => {
  const pageElements = createPage(props);

  return (
    <>
      <Head>
        <title> {props.urlTitle}</title>
        <style>{`body {margin: 0 !important;}`}</style>
        // @ts-ignore
        <meta charset="UTF-8" />
        <meta name="description" content={props.metaDescription}></meta>
        <meta name="keywords" content={props.metaKeywords}></meta>
      </Head>
      <Navigation />
      <div className="body-container">
        <div className="post-header">
          <div className="post-header-title">
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className="post-container ">
          <div className="post-avatar">
            <div className="post-avatar-image">
              <img
                alt="avatar-logo"
                src="https://avatars3.githubusercontent.com/u/10669108?s=88&v=4"
              ></img>
            </div>
            <div className="post-avatar-info">
              <span className="post-avatar-name">Firemind</span>
              <span className="post-avatar-date">{props.date}</span>
            </div>
          </div>
          <div>{pageElements.map(element => element)}</div>
        </div>
      </div>

      <style jsx>{`
        h1 {
          margin-top: 0;
          color: ${lightFont};
          font-family: ${h1.fontFamily};
          font-weight: ${h1.fontWeight};
          font-size: ${h1.fontSize};
          letter-spacing: 1px;
        }

        .body-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #f7f8fb;
          padding-bottom: 20px;
        }
        .post-header {
          background-color: ${secondary};
          height: 240px;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
          padding-right: 30px;
        }
        .post-header-title {
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          border-radius: 50%;
          height: 85px;
        }
        .post-avatar {
          margin-top: -45px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .post-avatar-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .post-avatar-name {
          margin-top: 0;
          color: ${darkFont};
          font-family: ${smallBold.fontFamily};
          font-weight: ${smallBold.fontWeight};
          font-size: ${smallBold.fontSize};
        }
        .post-avatar-date {
          margin-top: 0;
          color: ${grey};
          font-family: ${small.fontFamily};
          font-weight: ${small.fontWeight};
          font-size: ${small.fontSize};
        }
        .post-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 768px;
          padding-left: 30px;
          padding-right: 30px;
          background-color: white;
          border-radius: 5px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
          margin-top: -30px;
        }
      `}</style>
    </>
  );
};

export async function unstable_getStaticProps({ params }) {
  const props = blogPosts.find(post => post.urlTitle === params.urlTitle);
  return {
    props
  };
}

export async function unstable_getStaticPaths() {
  const paths = blogPosts.map(post => {
    return { params: post };
  });
  return {
    paths
  };
}

export default Page;
