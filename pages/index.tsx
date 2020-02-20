import Navigation from "../components/Navigation";
import { navbarTitle } from "../guidelines/Typography";
import BlogPostCard from "../components/BlogPostCard";
import { useRouter } from "next/router";
import blogPosts from "../data/posts";
import Head from "next/head";

const Home = () => {
  const router = useRouter();
  console.log("Hallo");
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
      <Navigation />
      <div className="body-container">
        <div className="blog-post-container">
          <div className="title-container">
            <h1>Firemind Academy</h1>
          </div>
          {blogPosts.map(post => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              description={post.previewDescription}
              date={post.date}
              onPressed={() => router.push(`/p/${post.urlTitle}`)}
            />
          ))}
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
        .blog-post-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          max-width: 768px;
        }
        .title-container {
          text-align: left;
          width: 90%;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        h1 {
          font-family: ${navbarTitle.fontFamily};
          font-weight: ${navbarTitle.fontWeight};
          font-size: ${navbarTitle.fontSize};
        }
      `}</style>
    </div>
  );
};

export default Home;
