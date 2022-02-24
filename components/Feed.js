import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
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

      <section className="hidden xl:inline-grid md:col-span-1">
      <div className="fixed ">
      {/* Mini profile */}
        <MiniProfile />

        {/* Suggestions */}
        <Suggestions />
      </div>
        
      </section>
    </main>
  );
}

export default Feed;
