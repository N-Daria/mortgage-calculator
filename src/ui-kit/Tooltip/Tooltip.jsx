import "./Tooltip.css";
import React from "react";

export default function Tooltip({ tooltipText }) {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  function toggleTooltip() {
    isTooltipOpen ? setIsTooltipOpen(false) : setIsTooltipOpen(true);
  }

  return (
    <button
      className="tooltip relative ml-[6px]"
      onClick={toggleTooltip}
      type="button"
    >
      <div
        className={`${
          !isTooltipOpen && "hidden"
        } tooltip__text py-1 px-2 bg-[#41434E] m-0 absolute w-[266px] top-7 rounded`}
      >
        {tooltipText}
      </div>
    </button>
  );
}
