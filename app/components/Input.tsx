import * as React from "react";
import { isValidArray } from "@/Dash/app/utils/random-functions";

interface IAppProps {
  name?: string;
  layoutClass?: string;
  labelClass?: string;
  inputClass?: string;
  label?: string;
  type?: string;
  placeHolder?: string;
  step?: string | number;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  defaultValue?: any;
  value?: any;
  onChange?: any;
  rest?: any;
}

const Input: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div
      className={`th-flex th-flex-col th-items-start th-gap-y-2.5 ${props.layoutClass}`}
    >
      <label
        htmlFor={props.name}
        className={`th-text-base th-font-medium th-leading-normal th-text-Text-100 ${props.labelClass}`}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        step={props.step}
        defaultValue={!isValidArray(props.defaultValue) && props.defaultValue}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.name}
        placeholder={props.placeHolder}
        {...props.rest}
        className={`th-block th-w-full th-relative th-rounded-lg th-border-0 th-p-4 th-font-medium th-text-Text-100 th-shadow-sm th-outline-1 th-outline th-outline-System-stroke2 placeholder:th-text-Text-100 focus:th-ring-1 focus:th-ring-offset-4 focus:th-ring-Text-100 th-leading-normal ${props.inputClass}`}
      />
    </div>
  );
};

export default Input;
