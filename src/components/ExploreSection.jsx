import React from "react";
import { CiSearch } from "react-icons/ci";

function ExploreSection() {
  return (
    <section className="bg-[#F7F1FD] w-full   h-94">
      <div className="mx-w-300 items-center mx-auto text-center py-24 ">
        <h2 className="font-bold text-4xl  leading-15">Explore Our Posts</h2>
        <p className="text-[20px] leading-5 font-normal text-[#6B7280] mt-4">
          Discover amazing content from talented writers across various topics
        </p>
        <div>
          <CiSearch />

          <input
            className="w-xl text-gray-400 h-12 px-12.25 mt-8.25 bg-white border rounded-2xl border-[#E5E7EB]"
            type="search"
            placeholder="Search posts..."
          />
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
