import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
  <main className="grid gird-cols-1 md:grid-cols-2 
  md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">
  {/* What we going for the feed is we'll have 3 grid on a large screen and when it is mobile form it will colapse into 1*/}
    <section className="col-span-2">
       {/* Stories */}
       <Stories />

       {/* Post */}
    </section>

    <section>
       {/* Mini profile */}
       {/* Suggestions */}
    </section>
    
    </main>  
    
  )
}

export default Feed
