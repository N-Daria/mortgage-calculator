import React, { useEffect } from "react";
import "./InputSlider.css";

export default function InputSlider({
  sliderText,
  min,
  max,
  inputName,
  value,
  setValue,
}) {
  const [background, setBackground] = React.useState(0);

  function handleChange({ target }) {
    setValue(target.value);
  }

  useEffect(() => {
    setBackground(value);
  }, [value]);

  return (
    <div className="slider">
      <input
        type="range"
        name={inputName}
        min={min}
        max={max}
        className="slider__input bg-yellow absolute"
        onChange={handleChange}
        value={value || min}
        // changes input background. Because of Tailwind only inline works
        style={{
          background: `linear-gradient(to right, #fbe54d ${
            ((parseInt(background) - min) * 100) / (max - min)
          }%, #333535 0px`,
        }}
      />

      {sliderText && (
        <div className="flex justify-between">
          <p className="slider__text m-0 pt-[6px]">
            {min} {sliderText[0]}
          </p>
          <p className="slider__text m-0 pt-[6px]">
            {max} {sliderText[1]}
          </p>
        </div>
      )}
    </div>
  );
}
