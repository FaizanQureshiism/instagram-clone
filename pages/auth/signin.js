import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

//3.08.55
//refer this from the offical NextAuth website sign in pages
// localhost:3000/auth/sigin
import React from 'react'

function signIn({ providers}) {
  return (
    <>
    {Object.values(providers).map((provider) => (
    <div key={provider.name}>
      <button onClick={() => SignIntoProvider (provider.id)}>
      SignIn with {provider.name}
      </button>
    </div>
      ))}
    </>
    
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;


//this on the server now we have to pass it back to the client level


