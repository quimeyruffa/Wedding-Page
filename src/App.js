import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { Presentation } from "./components/Presentation";
import Home from "./components/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [show, setShow] = useState(false);
  const totalSVGs = 6; // Cambia esto al número de SVGs que tienes
  const handleSVGLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadedCount === totalSVGs) {
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [loadedCount]);
  return (
    <>
      <div style={{ display: loading ? "" : "none" }}>
        <Loader />
      </div>
      <div style={{ display: loading || show ? "none" : "" }}>
        <Presentation handleSVGLoad={handleSVGLoad} setShow={setShow}/>
      </div>
      
        {show && <Home handleSVGLoad={handleSVGLoad}/>}
    </>
  );
}

export default App;
