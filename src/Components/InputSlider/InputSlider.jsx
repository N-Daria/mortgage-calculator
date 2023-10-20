import "./InputSlider.css";

export default function InputSlider({
  sliderText,
  min,
  max,
  inputName,
  connectInputs,
}) {
  return (
    <div className="slider">
      <input
        type="range"
        name={inputName}
        min={min}
        max={max}
        className="slider__input bg-yellow absolute"
        onChange={connectInputs}
      />

      {sliderText && (
        <div className="flex justify-between">
          <p className="slider__text m-0 pt-[6px]">
            {min} {sliderText}
          </p>
          <p className="slider__text m-0 pt-[6px]">
            {max} {sliderText}
          </p>
        </div>
      )}
    </div>
  );
}
