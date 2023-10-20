import Input from "../Input/Input";
import Search from "../Search/Search";
import "./Select.css";
import React, { useState } from "react";

export default function Select({ placeholder, header, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const optionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="select relative">
      <Input
        isSelect={true}
        placeholder={placeholder}
        header={header}
        onClickSelect={toggling}
        selectedValue={selectedOption}
      />

      {isOpen && (
        <div className="select__dropdown-block w-full bg-secondaryColor rounded-lg border-borderColor py-2 border absolute top-[92px]">
          <Search />

          <ul className="select__dropdown">
            {options.map((option) => (
              <li
                className="select__option"
                onClick={optionClicked(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
