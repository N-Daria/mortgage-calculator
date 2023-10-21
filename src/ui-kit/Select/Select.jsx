import "./Select.css";
import Input from "../Input/Input";
import Search from "../Search/Search";
import React, { useEffect, useState } from "react";

export default function Select({
  placeholder,
  header,
  options,
  isSearch,
  id,
  errorText,
  onChange,
  styles,
  isError,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [filteredOption, setFilteredOption] = useState(options);

  const toggling = () => setIsOpen(!isOpen);

  const optionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const newFiltered = options.filter((el) => el.includes(searchWord));
    setFilteredOption(newFiltered);
  }, [searchWord]);

  return (
    <div
      className={`select relative w-full ${styles} max-w-mainContentM tablet:max-w-[325px]`}
    >
      <Input
        isSelect={true}
        placeholder={placeholder}
        header={header}
        onClickSelect={toggling}
        selectedValue={selectedOption}
        id={id}
        errorText={errorText}
        onChange={onChange}
        isError={isError}
      />

      {isOpen && (
        <div className="select__dropdown-block w-full bg-secondaryColor rounded-lg border-borderColor py-2 border absolute top-[92px] :tablet">
          {isSearch && (
            <Search searchWord={searchWord} setSearchWord={setSearchWord} />
          )}

          <ul className="select__dropdown">
            {filteredOption?.map((option) => (
              <li
                className={`select__option ${
                  selectedOption === option ? "select__option_checked" : ""
                }`}
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
