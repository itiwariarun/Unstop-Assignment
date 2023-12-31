"use Client";
import React, { useState } from "react";
import Input from "./Input";
import { AddIcon, IconCrossSmall } from "./Icon";
import Chip from "./Chip";
import { isValidArray } from "./../utils/random-functions";

interface IAppProps {
  label?: string;
  layoutClass?: string;
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>; // Define the type for setItems
}

const MutliSelectInput: React.FunctionComponent<IAppProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      props.setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...props.items];
    newItems.splice(index, 1);
    props.setItems(newItems);
  };
  return (
    <div
      className={`th-flex th-w-full th-flex-col th-items-start th-gap-y-2.5 ${props.layoutClass}`}
    >
      <label
        htmlFor="assessment-name"
        className="th-text-base th-font-medium th-leading-normal th-text-Text-100"
      >
        {props.label}
      </label>
      {isValidArray(props.items) && (
        <ul className="th-w-full th-outline th-outline-1 th-p-4 th-relative -th-bottom-5 th-flex th-flex-wrap  th-gap-2.5 th-rounded-t-lg th-outline-System-stroke2 th-outline-b-0">
          {props.items.map((item, index) => (
            <Chip label={item} key={index}>
              <button
                type="button"
                className="th-p-0 th-max-h-fit th-max-w-fit th-border-0 th-m-0"
                onClick={() => handleRemoveItem(index)}
              >
                <IconCrossSmall path="th-fill-Text-100" rect="th-fill-white" />
              </button>
            </Chip>
          ))}
        </ul>
      )}
      <div className="th-relative th-w-full th-max-h-fit group">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeHolder="Add New Skill"
          inputClass={`focus:th-ring-System-stroke2 ${
            isValidArray(props.items) && "th-rounded-t-none"
          }`}
        />

        <button
          type="button"
          className="th-absolute th-top-3 th-right-3 group-focus:th-opacity-100 th-bottom-0 th-opacity-0 th-items-center"
          onClick={handleAddItem}
        >
          <AddIcon path="th-fill-Secondary-1" rect="th-fill-white" />
        </button>
      </div>
    </div>
  );
};

export default MutliSelectInput;
