import EsquinaIzquierda from "../../WeddingAssets/esquina.svg";
import ampersand from "../../WeddingAssets/ampersand.svg";
import dot from "../../WeddingAssets/dot.svg";
import Lottie from "lottie-react";
import adorno from "../../WeddingAssets/adorno_frase_portada.json";
import { Counter } from "./Counter";
import { Info } from "./Info";
import { motion } from "framer-motion";

function Home({ handleSVGLoad }) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: adorno,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <motion.div
        transition={{ ease: "easeOut", duration: 2 }}
        className="inv-container container"
        initial={{ opacity: 0 }}
        animate={{  opacity: 1 }}
      >
        <section className="portada">
          <div
            className="d-md-flex"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div className="portada-picture" onLoad={handleSVGLoad}>
              {" "}
            </div>
            <div className="sombra-horizontal sombra-bottom"></div>

            <div className="portada-container d-flex justify-content-center align-items-center">
              <div className="sombra-vertical sombra-left"></div>
              <img
                // onLoad={handleSVGLoad}
                src={EsquinaIzquierda}
                alt="esquina izquierda"
                className={`  adorno-esquina adorno-esquina-0`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={EsquinaIzquierda}
                alt="esquina derecha"
                className={` adorno-esquina adorno-esquina-1`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={EsquinaIzquierda}
                alt="esquina izquierda 1"
                className={` adorno-esquina adorno-esquina-2`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={EsquinaIzquierda}
                alt="esquina derecha 2"
                className={` adorno-esquina adorno-esquina-3`}
              />
              <div className="content-portada text-center">
                <div className="box-nombres-fecha-portada">
                  <span className="fecha">15.05.2021</span>
                  <div className="iniciales">
                    <span>D</span>
                    <img
                      // onLoad={handleSVGLoad}
                      style={{ width: 71.61, height: 68.25 }}
                      src={ampersand}
                      alt="&"
                      className="injectable ampersand-portada"
                    />
                    <span>G</span>
                  </div>
                  <div className="nombres">
                    <p>Danny & Gabi</p>
                  </div>
                </div>
                <div className="box-frase-portada">
                  <img
                    // onLoad={handleSVGLoad}
                    src={dot}
                    alt="dot"
                    className="adorno-gota"
                  />
                  <p>
                    Todos somos mortales, <br /> hasta el primer beso y la
                    segunda copa de vino{" "}
                  </p>
                  <div className="anim-frase-portada">
                    <Lottie
                      {...options}
                      style={{
                        fill: "#BA9972",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Counter />
        <Info />
      </motion.div>
    </>
  );
}

export default Home;
