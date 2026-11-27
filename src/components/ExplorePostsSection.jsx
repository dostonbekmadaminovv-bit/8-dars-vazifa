import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

function ExplorePost({ search = "" }) {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const categories = ["All", "Technology", "Productivity", "Design"];

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch("https://blogify-oquvchi.vercel.app/api/posts");

        if (!res.ok) {
          throw new Error("API da muammo");
        }

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  // Category filter

  const filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      post.title?.toLowerCase().includes(searchText) ||
      post.category?.toLowerCase().includes(searchText) ||
      post.description?.toLowerCase().includes(searchText) ||
      post.content?.toLowerCase().includes(searchText);

    const matchesCategory =
      activeCategory === "All" ||
      post.category?.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const latestPosts = filteredPosts.slice(0, 6);

  function handlePosts() {
    navigate("/posts");
  }

  return (
    <section className="px-5 py-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Categories */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg bg-gray-100 p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-md px-5 py-2 text-xs transition ${
                  activeCategory === category
                    ? "bg-white font-semibold text-slate-900 shadow-sm"
                    : "text-gray-500 hover:text-indigo-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <p className="py-10 text-center text-gray-400">Loading posts...</p>
        ) : latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-gray-400">No posts found.</p>
        )}
      </div>
    </section>
  );
}

export default ExplorePost;
