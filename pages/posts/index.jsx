import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1> Lists Of Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className = "border border-gray-300 shadow-md p-5">
            <h1 className="text-2xl">{post.title}</h1>
            <h3>
                {post.author} -<small>{post.publishedDate}</small> {" "}
            </h3>
            <p>{post.content}</p>
            <hr/>
        </div>
      ))}
    </div>
  );
};

export default Posts;

export async function getServerSideProps() {
  //fetch takes place
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
