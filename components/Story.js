import React from 'react'
//we will be using ES6 props to call out img and username getting variable from Stories.js
function Story({ img, username }) {
  return (
    <div>
      <img src={img} alt="" />{/* for the avatar */}
      <p>{username}</p> {/* for the username section */}

    </div>
  )
}

export default Story
