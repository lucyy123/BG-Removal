import { ChangeEvent, useState } from "react";
import imageWbackground from "../assets/image_w_bg.png";
import imageWObackground from "../assets/image_wo_bg.png";

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const hanldeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="sliderContainer">
      {/* ------------------ image with background-------------------- */}

      <img
        src={imageWbackground}
        alt="sample_images"
        style={{
          clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`,
          height:"24rem",
          width:"39rem",
          objectFit:'none'
       
        }}
      />
      {/* ------------------ Transparent image------------------------ */}
      <img
        src={imageWObackground}
        alt="sample_images"
        style={{
           height:"24rem",
           width:"39rem",
          objectFit:'none',
          position: "absolute",
          top: "0",
          left: "0",
          clipPath: `inset(0 0 0  ${sliderPosition}%)`,
      
        }}
      />

      {/* ------------------ Input slider ------------------------ */}

      <input
        type="range"
        value={sliderPosition}
        onChange={hanldeSlider}
        className="slider"
      />
    </div>
  );
};

export default Slider;
