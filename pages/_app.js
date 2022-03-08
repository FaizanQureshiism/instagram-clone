import '../styles/globals.css';
//Now we'll wrap our entire app in sessions for login and logout
import { SessionProvider } from "next-auth/react";
//3.11
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />; 
    </SessionProvider>
  );
  
}

export default MyApp
