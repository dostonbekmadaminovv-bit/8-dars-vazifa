import { FaArrowRight } from "react-icons/fa";

function LastCard({ item }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative">
        <img
          src={item.img}
          alt={item.title}
          className="h-56 w-full object-cover"
        />

        {item.category && (
          <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
            {item.category}
          </span>
        )}
      </div>

      <div className="p-6">
        {item.date && (
          <p className="mb-3 text-sm text-slate-500">{item.date}</p>
        )}

        <h3 className="mb-3 text-xl font-semibold leading-7 text-slate-900">
          {item.title}
        </h3>

        <p className="mb-5 text-base leading-6 text-slate-500">{item.text}</p>

        <a
          href={item.link || "#"}
          className="text-base font-medium text-indigo-600 flex items-center gap-1"
        >
          Read more <FaArrowRight />
        </a>
      </div>
    </article>
  );
}

export default LastCard;
