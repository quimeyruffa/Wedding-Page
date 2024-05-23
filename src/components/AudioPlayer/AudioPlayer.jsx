import audio from "./Perfect.mp3";
import useSound from "use-sound";
const AudioPlayer = ({ setShow }) => {
  const [play, { stop }] = useSound(audio);

  return (
    <div>
      <a
        onClick={() => {
          play();
          setShow(true);
        }}
        className="boton"
        id="play-music-modal"
        href="#"
      >
        Ingresar con música
      </a>
      <a
        onClick={() => {
          stop();
          setShow(true);
        }}
        className="boton"
        data-dismiss="modal"
        aria-label="Close"
        id=""
        href="#"
      >
        Ingresar sin música
      </a>
    </div>
  );
};

export default AudioPlayer;
