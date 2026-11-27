import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const POST_CONTENTS = {
  1: [
    {
      heading: "Modern Frameworks and Tools",
      body: "The rise of modern frameworks like React, Vue, and Svelte has revolutionized how developers approach building user interfaces. These tools provide powerful abstractions that make it easier to create complex, interactive applications while maintaining clean and maintainable code.",
    },
    {
      heading: "Performance and User Experience",
      body: "Web performance has become more critical than ever. Users expect lightning-fast load times and smooth interactions. Modern web development focuses heavily on optimizing performance through techniques like code splitting, lazy loading, and efficient caching strategies.",
    },
    {
      heading: "The Rise of AI Integration",
      body: "Artificial intelligence is becoming increasingly integrated into web applications, from chatbots and recommendation systems to advanced analytics and personalization features. This trend is only expected to grow as AI technologies become more accessible.",
    },
    {
      heading: "Web3 and Decentralization",
      body: "The concept of Web3 and decentralized applications is gaining traction. Blockchain technology is being explored for various use cases beyond cryptocurrency, including identity management, content distribution, and more.",
    },
    {
      heading: "Conclusion",
      body: "The future of web development is bright and full of possibilities. By staying up-to-date with the latest technologies and best practices, developers can create amazing experiences that push the boundaries of what's possible on the web.",
    },
  ],
  2: [
    {
      heading: "Prioritizing High-Impact Tasks",
      body: "True productivity is not about doing more things—it is about doing the right things. Frameworks like the Eisenhower Matrix and time-blocking help you focus your peak energy on tasks that directly move your goals forward.",
    },
    {
      heading: "Building Sustainable Daily Routines",
      body: "Consistency beats intensity over the long run. Establishing clear morning and evening routines reduces decision fatigue and creates momentum before distractions can take over your day.",
    },
    {
      heading: "Leveraging Modern Tools Wisely",
      body: "Digital tools like Notion, Todoist, and calendar automation can streamline repetitive workflows, provided they stay simple enough not to become a distraction themselves.",
    },
    {
      heading: "Conclusion",
      body: "Mastering productivity is an ongoing process of refinement. Start small, track what works for your energy levels, and protect your focus.",
    },
  ],
  3: [
    {
      heading: "Visual Hierarchy and Balance",
      body: "Good design guides the user's eye naturally from the most important element to supporting details through contrast, scale, and intentional spacing.",
    },
    {
      heading: "Typography and Readability",
      body: "Clear typography sets the tone of a product. Choosing legible typefaces, balanced line heights, and consistent font scales makes content effortless to scan.",
    },
    {
      heading: "Consistency Across Components",
      body: "Reusable patterns, predictable interactions, and unified color systems build user trust and reduce cognitive load across every screen.",
    },
    {
      heading: "Conclusion",
      body: "Great design feels invisible because everything works where users expect it to. Focus on clarity first, and visual polish will naturally follow.",
    },
  ],
};

function buildFullContent(post) {
  if (post.content) return post.content;

  // Agar POST_CONTENTS ichida shu id bo'lsa, o'shani qaytaradi
  if (POST_CONTENTS[String(post.id)]) {
    return {
      intro: post.excerpt,
      sections: POST_CONTENTS[String(post.id)],
    };
  }

  // Qolgan barcha postlar (4-9 va boshqalar) uchun ham avtomatik ko'p bo'limli matn
  return {
    intro: post.excerpt,
    sections: [
      {
        heading: "Key Concepts and Foundations",
        body: `${post.title} plays an essential role in modern ${post.category.toLowerCase()} workflows. Understanding the core principles behind this topic helps teams avoid common pitfalls and deliver stronger, more reliable results.`,
      },
      {
        heading: "Practical Strategies in Action",
        body: "Applying structured best practices step by step turns abstract ideas into measurable progress. Start by auditing your current process, identifying bottlenecks, and introducing small, testable improvements.",
      },
      {
        heading: "Common Challenges to Avoid",
        body: "Many beginners overcomplicate their approach early on. Keeping solutions maintainable, well-documented, and focused on real user needs ensures long-term success.",
      },
      {
        heading: "Conclusion",
        body: `By continuously learning and refining your approach to ${post.title.toLowerCase()}, you can stay ahead of industry shifts and create lasting value in your projects.`,
      },
    ],
  };
}

function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function DetailPostPage() {
  const { id } = useParams();
  const location = useLocation();

  const [post, setPost] = useState(location.state?.post || null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(!location.state?.post);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function loadData() {
      if (!location.state?.post) {
        setLoading(true);
      }

      try {
        const res = await fetch("https://blogify-oquvchi.vercel.app/api/posts");
        if (!res.ok) throw new Error("API da xatolik");

        const data = await res.json();
        const postsList = Array.isArray(data) ? data : data.posts || [];

        setAllPosts(postsList);

        const foundPost = postsList.find(
          (item) => String(item.id) === String(id),
        );
        setPost(foundPost || location.state?.post || null);
      } catch (error) {
        console.error(error);
        if (!location.state?.post) {
          setPost(null);
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id, location.state]);

  if (loading) {
    return <p className="py-20 text-center text-gray-400">Loading...</p>;
  }

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/" className="mt-4 inline-block text-indigo-600">
          Back to Posts
        </Link>
      </div>
    );
  }

  const date = formatDate(post.createdAt);
  const formattedContent = buildFullContent(post);

  // Joriy postdan tashqari 2 ta postni olish (masalan id "1" bo'lsa: id "2" va "3" chiqadi)
  const relatedPosts = allPosts
    .filter((item) => String(item.id) !== String(post.id))
    .slice(0, 2);

  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-indigo-600"
        >
          <FaArrowLeft />
          Back to Posts
        </Link>

        <p className="mb-3 w-fit rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
          {post.category}
        </p>

        <h1 className="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">
          {post.title}
        </h1>

        <div className="mb-8 flex flex-wrap items-center gap-5 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <CiUser size={18} />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CiCalendarDate size={18} />
            {date}
          </span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="mb-8 max-h-125 w-full rounded-2xl object-cover"
        />

        {typeof formattedContent === "string" ? (
          <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
            {formattedContent}
          </div>
        ) : (
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            {formattedContent.intro && <p>{formattedContent.intro}</p>}

            {formattedContent.sections?.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <h2 className="text-2xl font-bold text-slate-900">
                  {sec.heading}
                </h2>
                <p>{sec.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Related Posts
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="mb-3 flex items-center gap-1.5 text-xs text-gray-400">
                      <CiCalendarDate size={16} />
                      <span>{formatDate(item.createdAt)}</span>
                    </p>

                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mb-4 text-xs leading-relaxed text-gray-500">
                      {item.excerpt}
                    </p>

                    <Link
                      to={`/detail/${item.id}`}
                      state={{ post: item }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:underline"
                    >
                      Read more <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default DetailPostPage;
