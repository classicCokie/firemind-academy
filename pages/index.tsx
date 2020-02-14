import Navigation from "../components/Navigation";
import { navbarTitle } from "../guidelines/Typography";
import BlogPostCard from "../components/BlogPostCard";
import { useRouter } from "next/router";

const blogPosts = [
  {
    id: "1",
    title: "Simple Healthbar",
    previewDescription:
      "A Simple Healthbar tutorial. Here you will learn how to use a healthbar in ",
    link: "hahahahah",
    date: "12.10.1993"
  },
  {
    id: "2",
    title: "Kill Enimes",
    previewDescription:
      "A Simple Healthbar tutorial. Here you will learn how to use a healthbar in ",
    link: "hahahahah",
    date: "02.10.2012"
  },
  {
    id: "3",
    title: "Young blood",
    previewDescription:
      "A Simple Healthbar tutorial. Here you will learn how to use a healthbar in ",
    link: "hahahahah",
    date: "12.10.1883"
  },
  {
    id: "4",
    title: "lalala",
    previewDescription:
      "A Simple Healthbar tutorial. Here you will learn how to use a healthbar in ",
    link: "hahahahah",
    date: "12.10.1883"
  }
];

const Home = () => {
  const router = useRouter();

  const handleClick = href => {
    router.push(href);
  };

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
          //   <a
          //     href={`/blogPost?title=${post.title}`}
          //     onClick={() => handleClick(`/blogPost?title=${post.title}`)}
          //   >
          <BlogPostCard
            key={post.id}
            title={post.title}
            description={post.previewDescription}
            date={post.date}
            onPressed={() => handleClick(`/blogPost?title=${post.title}`)}
          />
          //   </a>
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
