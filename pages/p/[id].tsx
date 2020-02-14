import { useRouter } from "next/router";
import blogPosts from "../../data/posts";

const Page = ({ title, previewDescription }) => {
  const router = useRouter();

  return (
    <>
      <h1>{title}</h1>
      <p>{previewDescription}</p>
    </>
  );
};

Page.getInitialProps = async ctx => {
  return blogPosts.find(post => post.urlTitle === ctx.query.id);
};

export default Page;
