import Navbar from '../components/Navbar';
import '../styles/globals.css';
import ThemeSwitch from '../components/theme-switch';

function MyApp({
  Component, pageProps: { ...pageProps }
}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ThemeSwitch />
    </>
  );
}

export default MyApp;
