import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import React from 'react'
//3.08.55
//refer this from the offical NextAuth website sign in pages
function signIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

//we'll do server side rendering
//this on the server now we have to pass it back to the client level

export async function getServerSideProps() {
  const providers = await getProviders();

  return{
    props:{
      providers,
    },
  };

}

export default signIn; 
