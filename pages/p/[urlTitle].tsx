import createPage from "../../services/createPage";
import blogPosts from "../../data/posts";
import Navigation from "../../components/Navigation";
import Head from "next/head";

const Page = props => {
  const pageElements = createPage(props);

  return (
    <>
      <Head>
        <title> {props.urlTitle}</title>
        <style>{`body {margin: 0 !important;}`}</style>
      </Head>
      <Navigation />
      <div className="body-container">
        <div className="post-container ">
          <div>{pageElements.map(element => element)}</div>
        </div>
      </div>

      <style jsx>{`
        .body-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #f7f8fb;
        }
        .post-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          max-width: 768px;
        }
        div {
          padding-left: 20px;
          padding-right: 20px;
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
  return blogPosts.map(post => {
    return { params: post };
  });
}

export default Page;
