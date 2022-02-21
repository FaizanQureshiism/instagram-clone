import React, { useEffect } from 'react';
import faker from "faker";
//1.34.46 
function Stories() {
//useEffect allows you to refire this function by taking the update 
//from the data and loads everytime the browser is refreshed or new data is added
    useEffect( () => {
        const suggestions = [...Array(20)].map((_,i) => ({
          ...faker.helpers.contextualCard(),
          id:i,
        }));

        console.log(suggestions);
    }, []);

  return (
    <div>
  {/* For stories we'll take up some fake people from faker.js*/}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  )
}

export default Stories
