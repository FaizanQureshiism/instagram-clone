import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";
//2.00.29 
function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* What we going for the feed is we'll have 3 grid on a large screen and when it is mobile form it will colapse into 1*/}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />

        {/* Post */}
        <Posts />


      </section>

      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
