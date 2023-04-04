import { Link, useSearchParams } from "react-router-dom";
import { url } from "../../utils";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    searchParams.set("search", search);
    setSearchParams(Object.fromEntries([...searchParams]));
  }, [search]);

  const posts = [
    {
      postId: 1,
      title: "post 1",
      postUrl: "post-1",
    },
    {
      postId: 2,
      title: "post 2",
      postUrl: "post-2",
    },
    {
      postId: 3,
      title: "post 3",
      postUrl: "post-3",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="blog description" />
      </Helmet>
      <h2>Blog</h2>
      <input
        type="text"
        defaultValue={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link
              to={url("home.blog.post", {
                postId: post.postId,
                postUrl: post.postUrl,
              })}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blog;
