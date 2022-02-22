import React, { useEffect, useState } from 'react';
import faker from "@faker-js/faker";
import Story from './Story';
//1.43.24
function Stories() {
//useEffect allows you to refire this function by taking the update 
//from the data and loads everytime the browser is refreshed or new data is added
    const [suggestions,setSuggestions] = useState([]) //it's a set of storage or variable

    useEffect( () => {
      //this code helps us to import libraies from faker.js to get fake data
        const suggestions = [...Array(20)].map((_,i) => ({
          ...faker.helpers.contextualCard(),
          id:i,
        }));

        setSuggestions(suggestions); 
  //when the compoenets mounts i.e useEffect the array will be stored and rendured data will be presented
    }, []);

  return (
    <div>
  {/* For stories we'll take up some fake people from faker.js*/}
      {suggestions.map(profile => (
        <Story 
        key={profile.id} 
        img={profile.avatar} 
        username={profile.username}
        /> 
        
        //this will show the profile from the data extracted from the fakerjs
        //key is used in react to load the exact components such as story everytime a new data is uploaded--
        //without acutally reduring the whole page/window 
      ))}    

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
