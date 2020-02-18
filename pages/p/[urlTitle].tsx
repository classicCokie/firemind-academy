import createPage from "../../services/createPage";
import blogPosts from "../../data/posts";

const Page = (props) => {
  const pageElements = createPage(props);
  console.log("PAGE ELEMENTS -> ", pageElements);
  return (
    <>
      {pageElements.map(element => (element))}
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
    return { params: post }
  });
  return {
    paths
  }
}



export default Page;
