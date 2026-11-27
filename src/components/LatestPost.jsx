import { FaLongArrowAltRight } from "react-icons/fa";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LatestPost() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch("https://blogify-oquvchi.vercel.app/api/posts");
        if (!res.ok) {
          throw new Error("apida muammo");
        }

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  function handlePosts() {
    navigate("/posts");
  }

  return (
    <section className="px-4 py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Latest Posts</h3>
            <p className="text-gray-400">Check out our most recent articles</p>
          </div>
          <button
            onClick={handlePosts}
            className="flex cursor-pointer items-center gap-2 rounded-2xl border border-gray-300 px-6 py-3 hover:bg-gray-50"
          >
            View All <FaLongArrowAltRight />
          </button>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {posts.length > 0 &&
            posts.slice(-3).map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default LatestPost;
