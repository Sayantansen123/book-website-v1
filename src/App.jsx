// App.jsx
import { useEffect, useState } from "react";
import Book from "./components/Book";
import { EarProvider } from "./components/EarContext";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is a phone (touch + small screen)
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isPhone = window.innerWidth <= 768;
    //console.log(isPhone)

    if (isTouchDevice && isPhone) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-pink-200 via-white to-pink-100">
        <p className="text-xl font-semibold text-red-600">
          This experience is only available on iPads and laptops.
        </p>
      </div>
    );
  }

  return (

    <>
      <EarProvider>
        <Book />
      </EarProvider>
      {loading ? <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-br from-pink-200 via-white to-pink-100 absolute z-10 top-0" > <Loader /> </div>
        : <></>}

    </>

  );
}

export default App;