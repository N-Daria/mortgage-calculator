import "./Input.css";
import Clue from "../Сlue/Сlue";
import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import MessageInfo from "../MessageInfo/MessageInfo";
import InputSlider from "../InputSlider/InputSlider";

export default function Input({
  id,
  placeholder,
  defaultValue,
  header,
  min,
  max,
  isSelect,
  onClickSelect,
  selectedValue,
  isIconCurrency,
  isTooltip,
  tooltipText,
  isMessage,
  messageText,
  isSlider,
  sliderText,
  isError,
  errorText,
  onChange,
  styles,
}) {
  const [value, setValue] = React.useState(defaultValue);

  function handleChange({ target }) {
    const newValue = Number(target.value);

    if (isNaN(newValue)) {
      return;
    } else {
      setValue(newValue);
    }

    onChange();
  }

  return (
    <div
      className={`max-w-mainContentM tablet:max-w-[325px] w-full relative ${styles}`}
    >
      <div className="mb-3 flex">
        <label
          htmlFor={id}
          className={`${
            (isIconCurrency && "input__icon input__icon_currency") ||
            (isSelect && "input__icon input__icon_select")
          } input__header m-0`}
        >
          {header}
        </label>

        {isTooltip && <Tooltip tooltipText={tooltipText} />}
      </div>
      <input
        className={`input w-full bg-baseColor rounded-md border-borderColor py-3 pl-6 pr-12 border ${
          isError && "input_error"
        } ${isSelect && "input_select"}`}
        type="text"
        id={id}
        placeholder={placeholder}
        name={id}
        onChange={handleChange}
        onClick={onClickSelect}
        value={selectedValue || value || ""}
      />

      {isSlider && (
        <InputSlider
          sliderText={sliderText}
          inputName={`${id}-range`}
          min={min}
          max={max}
          setValue={setValue}
          value={value}
        />
      )}

      {isMessage && <MessageInfo tooltipText={messageText} />}
      {isError && <Clue text={errorText} isError={isError} />}
    </div>
  );
}
