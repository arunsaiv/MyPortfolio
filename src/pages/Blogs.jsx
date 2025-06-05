import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=arunsaiv")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))) // Get top 5 posts
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-4">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Published on {new Date(post.published_at).toLocaleDateString()}
              </p>
              <p className="mt-2">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}