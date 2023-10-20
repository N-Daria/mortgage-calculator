import "./Input.css";
import Clue from "../Сlue/Сlue";
import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import MessageInfo from "../MessageInfo/MessageInfo";
import InputSlider from "../InputSlider/InputSlider";

export default function Input({
  id,
  placeholder,
  text,
  inputName,
  min,
  max,
  isIcon,
  isTooltip,
  tooltipText,
  isMessage,
  messageText,
  isSlider,
  sliderText,
  isError,
  errorText,
  onChange,
}) {
  function connectInputs() {}

  return (
    <div className="m-w-mainContentM tablet:m-w-[325px] w-full relative">
      <div className="mb-3 flex">
        <label
          htmlFor={id}
          className={`${isIcon && "input__icon"} input__header m-0 mr-[6px]`}
        >
          {text}
        </label>

        {isTooltip && <Tooltip tooltipText={tooltipText} />}
      </div>
      <input
        className={`input w-full bg-baseColor rounded-md border-borderColor py-3 px-6 border ${
          isError && "input_error"
        }`}
        type="text"
        id={id}
        placeholder={placeholder}
        name={inputName}
        value={min}
        onChange={onChange}
      />

      {isSlider && (
        <InputSlider
          sliderText={sliderText}
          inputName={`${inputName}-range`}
          min={min}
          max={max}
          connectInputs={connectInputs}
        />
      )}

      {isMessage && <MessageInfo tooltipText={messageText} />}
      {isError && <Clue text={errorText} isError={isError} />}
    </div>
  );
}
