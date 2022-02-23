import React from 'react'
//we will be using ES6 props to call out img and username getting variable from Stories.js
function Story({ img, username }) {
  return (
    <div>
      <img className='h-14 w-14 rounded-full p-[1.5px]
       border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out '
      src={img} alt="" />{/* for the avatar */}
      <p className='text-xs w-14 truncate text-center'>{username}</p> {/* for the username section */}

    </div>
  )
}

export default Story
