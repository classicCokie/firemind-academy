import Navigation from "../components/Navigation";
import { h1, paragraph } from "../guidelines/Typography";
import BlogPostCard from "../components/BlogPostCard";
import { useRouter } from "next/router";
import blogPosts from "../data/posts";
import { useState } from "react";
import Head from "next/head";


const BlogPostOverview = () => {
  const router = useRouter();

  const [filterValue, setFilterValue] = useState("");


  return (
    <div>
      <Head>
        <title> Firemind Academy </title>
        <style>{`body {margin: 0 !important;}`}</style>
        // @ts-ignore
        <meta charset="UTF-8" />
        <meta name="description" content="Tech Tutorials made eazy. Trying to understand Tech stuff? This is your place to go."></meta>
        <meta name="keywords" content="Firemind Tech Tutorials Easy"></meta>
      </Head>
      <Navigation />
      <div className="body-container">
        <div className="blog-post-container">
          <div className="input-container">
            <label htmlFor="search-tutorials">Search Tutorials
                <input type="text" name="search-tutorials" onChange={(event) => setFilterValue(event.target.value)} placeholder="Search" />
            </label>
          </div>

          {blogPosts.map((post: any, index) => {
            if (post.previewDescription?.toLowerCase().includes(filterValue.toLowerCase()) || post.title?.toLowerCase().includes(filterValue.toLowerCase())) {
              return (<BlogPostCard
                key={index}
                title={post.title}
                description={post.previewDescription}
                date={post.date}
                onPressed={() => router.push(`/p/${post.urlTitle}`)}
              />)
            }
          }
          )}
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
          padding-top: 20px;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .input-container {
          width: 80%;
          height: 100px;
        }
        input {
          width: 98%;
          height: 40px;
          border-radius: 5px;
          font-size: 20px;
          padding-left: 10px;
          border: 1px solid #cdc7c7;
          max-width: 768px;
        }
        label {
          font-family: ${paragraph.fontFamily};
          font-weight: ${paragraph.fontWeight};
          font-size: ${paragraph.fontSize};
        }
        h1 {
          font-family: ${h1.fontFamily};
          font-weight: ${h1.fontWeight};
          font-size: ${h1.fontSize};
        }
      `}</style>
    </div>
  );
};

export default BlogPostOverview;
