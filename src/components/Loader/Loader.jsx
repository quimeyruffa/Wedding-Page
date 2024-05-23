import React from "react";
import style from "./Loader.module.css";
import Lottie from "lottie-react";
import corazon from "../../WeddingAssets/corazon.json";
const Loader = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: corazon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={style["container-loader"]}>
      <Lottie
        {...options}
        style={{ fill: "#BA9972", width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default Loader;
