import { useState } from "react";
import ExploreSection from "../../components/ExploreSection";
import ExplorePost from "../../components/ExplorePostsSection";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <ExploreSection search={search} setSearch={setSearch} />

      <ExplorePost search={search} />
    </>
  );
}

export default Home;
