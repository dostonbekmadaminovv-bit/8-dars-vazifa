import { lastdataArr } from "./data/lastdata";
import LastCard from "./LastCard";
import { FaArrowRight } from "react-icons/fa";
function LastSection() {
  return (
    <section className="w-full bg-[#fafbfc] px-6 py-20">
      <div className="mx-auto w-full max-w-300">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest Posts</h2>
            <p className="mt-2 text-base text-slate-500">
              Check out our most recent articles
            </p>
          </div>

          <button className=" flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-6.5 py-3 text-sm">
            View All <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lastdataArr.map((item) => (
            <LastCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LastSection;
