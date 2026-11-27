import React from "react";
import { IoSearch } from "react-icons/io5";

function ExploreSection({ search, setSearch }) {
  return (
    <section className="w-full bg-[#F7F1FD] px-5 py-8">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-2xl font-bold leading-10">Explore Our Posts</h2>

        <p className="mt-2 text-sm text-[#6B7280]">
          Discover amazing content from talented writers across various topics
        </p>

        <div className="relative mx-auto mt-5 max-w-[450px]">
          <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white pl-11 pr-4 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
