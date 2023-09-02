import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({
  Component, pageProps: { ...pageProps }
}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
