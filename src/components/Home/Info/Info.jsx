import Lottie from "lottie-react";
import esquina from "../../../WeddingAssets/esquina_card.svg";
import ceremonia from "../../../WeddingAssets/img_ceremonia.json";
import fiesta from "../../../WeddingAssets/img_fiesta.json";
import adorno from "../../../WeddingAssets/adorno_card.svg";
import Button from "../Counter/Button";
import { ButtonMaps } from "./MapComponent";
import ConfirmInvite from "./ConfirmInvite/ConfirmInvite";

function Info({ setModal }) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: ceremonia,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const options1 = {
    loop: true,
    autoplay: true,
    animationData: fiesta,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const eventDetails = {
    start: "2025-04-05 14:03:14",
    end: "2025-04-05 14:03:14",
    timezone: "America/Argentina/Buenos_Aires",
    title: "Boda de Danny y Gabi (Ceremonia)",
  };
  return (
    <section className="ceremonia-fiesta">
      <div className="sombra-horizontal sombra-top"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-ceremonia d-flex justify-content-center text-center">
            <div className="box-bordes-adorno d-flex justify-content-center">
              <div className="box-color-col">
                <div className="anim-anillos">
                  <Lottie
                    {...options}
                    style={{
                      fill: "#BA9972",
                    }}
                  />
                </div>
                <h3>Ceremonia</h3>
                <img src={adorno} className="adorno-titulo" alt="adorno1" />
                <div className="info-col">
                  <div className="info-box">
                    <h6>Día</h6>
                    <p>Sábado 4 de Abril - 17hs</p>
                    <Button
                      start={eventDetails.start}
                      end={eventDetails.end}
                      timezone={eventDetails.timezone}
                      title={eventDetails.title}
                    />
                  </div>
                </div>
                <ConfirmInvite setModal={setModal} />
                <ButtonMaps setModal={setModal} />
              </div>
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina"
                className={` adorno-esquina adorno-esquina-0`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina1"
                className={` adorno-esquina adorno-esquina-1`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina2"
                className={` adorno-esquina adorno-esquina-2`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina3"
                className={` adorno-esquina adorno-esquina-3`}
              />
            </div>
          </div>

          <div className="col-md-6 col-ceremonia d-flex justify-content-center text-center">
            <div className="box-bordes-adorno d-flex justify-content-center">
              <div className="box-color-col">
                <div className="anim-anillos">
                  <Lottie
                    {...options1}
                    style={{
                      fill: "#BA9972",
                    }}
                  />
                </div>
                <h3>Fiesta </h3>
                <img src={adorno} className="adorno-titulo" alt="adorno1" />
                <div className="info-col">
                  <div className="info-box">
                    <h6>Día</h6>
                    <p>Sábado 4 de Abril - 17hs</p>
                    <Button
                      start={eventDetails.start}
                      end={eventDetails.end}
                      timezone={eventDetails.timezone}
                      title={eventDetails.title}
                    />
                  </div>
                </div>
                <ConfirmInvite setModal={setModal} />
                <ButtonMaps setModal={setModal} />
              </div>
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina"
                className={` adorno-esquina adorno-esquina-0`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina1"
                className={` adorno-esquina adorno-esquina-1`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina2"
                className={` adorno-esquina adorno-esquina-2`}
              />
              <img
                // onLoad={handleSVGLoad}
                src={esquina}
                alt="esquina3"
                className={` adorno-esquina adorno-esquina-3`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
