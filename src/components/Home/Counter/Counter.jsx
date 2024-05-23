import Lottie from "lottie-react";
import line from "../../../WeddingAssets/adorno_divisor.svg";
import corazon from "../../../WeddingAssets/corazon-falta.json";
import { useEffect, useState } from "react";

function Counter() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: corazon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-04T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);
  return (
    <section className="cuenta-regresiva">
      <div className="adornos-divisor d-flex justify-content-between">
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
      </div>
      <div className="container">
        <div className=" d-flex justify-content-center align-items-center">
          <div className="box-cta-regresiva text-center">
            <span className="falta">Falta</span>
            <div className="reloj" id="reloj">
              <div id="dias" className="reloj-col">
                <span className="number">{timeLeft?.days}</span>
                <span className="time">días</span>
              </div>
              <div id="horas" className="reloj-col">
                <span className="number">{timeLeft?.hours}</span>
                <span className="time">hs</span>
              </div>
              <div id="minutos" className="reloj-col">
                <span className="number">{timeLeft?.minutes}</span>
                <span className="time">min</span>
              </div>
              <div id="segundos" className="reloj-col no-border">
                <span className="number">{timeLeft?.seconds}</span>
                <span className="time">seg</span>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Lottie
                {...options}
                className="corazon-falta"
                style={{
                  fill: "#BA9972",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="adornos-divisor d-flex justify-content-between">
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
        <img
          // onLoad={handleSVGLoad}
          src={line}
          alt="line"
          className={`adorno-borde`}
        />
      </div>
    </section>
  );
}

export default Counter;
