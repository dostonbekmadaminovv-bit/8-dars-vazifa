import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

function PostCard({ post }) {
  const { id, category, image, title, excerpt, createdAt } = post;

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="relative shrink-0">
        <img src={image} alt={title} className="h-48 w-full object-cover" />

        <p className="absolute left-4 top-4 w-fit rounded-full bg-[#4346EF] px-3 py-0.5 text-xs font-medium text-white">
          {category}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 flex items-center gap-2 text-xs text-gray-400">
          <CiCalendarDate size={16} />
          <span>{date}</span>
        </p>

        <h3 className="mb-2 text-2xl font-bold leading-snug text-slate-900">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-gray-500">{excerpt}</p>

        <Link
          to={`/detail/${id}`}
          state={{ post }}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#4346EF] hover:underline"
        >
          Read more <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
