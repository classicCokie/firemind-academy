import Navigation from "../components/Navigation";
import { navbarTitle } from "../guidelines/Typography";
import BlogPostCard from "../components/BlogPostCard";
import { useRouter } from "next/router";
import blogPosts from "../data/posts";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:300&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation />

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
      <style jsx>{`
        .blog-post-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
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
