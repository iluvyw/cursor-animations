import { useEffect, useRef } from "react";
import "./Cursor.scss";
import { getSiblings, lerp } from "../utils/utils";
import Haaland from "../assets/haaland.mp4";
import Grealish from "../assets/grealish.mp4";
import Bruyne from "../assets/bruyne.mp4";
import Silva from "../assets/silva.mp4";
import Stones from "../assets/stones.mp4";
import Rodri from "../assets/rodri.mp4";
import Ake from "../assets/ake.mp4";
import Dias from "../assets/dias.mp4";
import Akanji from "../assets/akanji.mp4";
import Ederson from "../assets/ederson.mp4";
import Gundogan from "../assets/gundogan.mp4";
import { gsap } from "gsap";

function Cursor() {
  const cursorRef = useRef();
  const cursorDelta = useRef({ x: 0, y: 0 });
  useEffect(() => {
    function onMouseMove(event) {
      cursorDelta.current.x = lerp(event.x, cursorDelta.current.x, 0.5);
      cursorDelta.current.y = lerp(event.y, cursorDelta.current.y, 0.5);
      cursorRef.current.style.transform = `translateX(${cursorDelta.current.x}px) translateY(${cursorDelta.current.y}px)`;
      requestAnimationFrame(() => onMouseMove(event));
    }

    function scaleCursor(amount) {
      gsap.to(cursorRef.current.children[0], {
        scale: amount,
        duration: 0.3,
      });
    }

    function setVideo(element) {
      const src = element.getAttribute("data-video-src");
      const video = document.querySelector(`#${src}`);
      const siblings = getSiblings(video);
      if (video.id == src) {
        gsap.set(video, { zIndex: 4, opacity: 1 });
        siblings.forEach((i) => {
          gsap.set(i, { zIndex: 1, opacity: 0 });
        });
      }
    }

    function addBlending(element) {
      element.classList.add("blend");
    }

    function removeBlending(element) {
      element.classList.remove("blend");
    }

    function onScaleMouse() {
      const elements = [].slice.call(document.getElementsByTagName("h2"));
      elements.forEach((element) => {
        if (element.matches(":hover")) {
          setVideo(element);
          scaleCursor(0.8);
        }
        element.addEventListener("mouseenter", () => {
          setVideo(element);
          addBlending(cursorRef.current);
          scaleCursor(0.8);
        });
        element.addEventListener("mouseleave", () => {
          removeBlending(cursorRef.current);
          scaleCursor(0);
        });
      });
    }

    window.addEventListener("mousemove", onMouseMove);
    onScaleMouse();
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div className="media">
        <video
          src={Bruyne}
          preload="auto"
          autoPlay
          muted
          loop
          id="bruyne"
        ></video>
        <video
          src={Grealish}
          preload="auto"
          autoPlay
          muted
          loop
          id="grealish"
        ></video>
        <video
          src={Haaland}
          preload="auto"
          autoPlay
          muted
          loop
          id="haaland"
        ></video>
        <video
          src={Ederson}
          preload="auto"
          autoPlay
          muted
          loop
          id="ederson"
        ></video>
        <video
          src={Akanji}
          preload="auto"
          autoPlay
          muted
          loop
          id="akanji"
        ></video>
        <video src={Dias} preload="auto" autoPlay muted loop id="dias"></video>
        <video src={Ake} preload="auto" autoPlay muted loop id="ake"></video>
        <video
          src={Rodri}
          preload="auto"
          autoPlay
          muted
          loop
          id="rodri"
        ></video>
        <video
          src={Gundogan}
          preload="auto"
          autoPlay
          muted
          loop
          id="gundogan"
        ></video>
        <video
          src={Stones}
          preload="auto"
          autoPlay
          muted
          loop
          id="stones"
        ></video>
        <video
          src={Silva}
          preload="auto"
          autoPlay
          muted
          loop
          id="silva"
        ></video>
      </div>
    </div>
  );
}

export default Cursor;
