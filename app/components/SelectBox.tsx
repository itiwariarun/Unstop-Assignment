"use client";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { DownIcon, CheckIcon } from "./Icon";
import {
  isValidArray,
  extractDescriptionsAndPurposes,
} from "./../utils/random-functions";

interface IAppProps {
  name: string;
  label?: string;
  placeHolder?: string;
  defaultValue?: string;
  items?: any;
}

const SelectBox: React.FunctionComponent<IAppProps> = (props) => {
  const [selected, setSelected] = useState<string | null>(
    props.defaultValue || null
  );

  return (
    <div className="th-flex th-min-w-full th-relative th-flex-col th-items-start th-gap-y-2.5">
      <label
        htmlFor="assessment-name"
        className="th-text-base th-font-medium th-leading-normal th-text-Text-100"
      >
        {props.label}
      </label>
      <Listbox name={props.name} value={selected} onChange={setSelected}>
        <div className="th-relative th-w-full th-mt-1">
          <Listbox.Button className="th-relative th-w-full th-cursor-default th-rounded-lg th-bg-white th-py-4 th-pl-4 th-pr-12 th-text-left th-border th-border-System-stroke2 focus:th-ring-1 focus:th-ring-offset-4 th-ring-Text-100 focus:th-outline-none focus-visible:th-border-indigo-500 focus-visible:th-ring-2 focus-visible:th-ring-white/75 focus-visible:th-ring-offset-2 focus-visible:th-ring-offset-orange-300 sm:th-text-sm">
            <span className="th-block th-truncate th-leading-normal th-font-medium th-text-Text-100">
              {selected !== null ? selected : props.placeHolder}
            </span>
            <span className="th-pointer-events-none th-absolute th-inset-y-0 th-right-0 th-flex th-items-center th-pr-2">
              <DownIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="th-transition th-ease-in th-duration-100"
            leaveFrom="th-opacity-100"
            leaveTo="th-opacity-0"
          >
            <Listbox.Options className="th-absolute th-gap-y-1 th-flex th-flex-col th-border-Text-100 th-border-spacing-4 th-border th-mt-1 th-z-20 th-max-h-60 th-w-full th-overflow-auto th-rounded-md th-bg-amber-50 th-py-1 th-text-base th-shadow-lg th-ring-1 th-ring-Text-100 focus:th-outline-none sm:th-text-sm">
              {isValidArray(props.items) &&
                props.items.map((item: any, itemIdx: any) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      `th-relative th-cursor-default th-mx-4 th-rounded-md th-select-none th-py-2 th-px-4 ${
                        active
                          ? "th-bg-Accent-Purple-Light th-text-Accent-Purple"
                          : "th-text-gray-900"
                      }`
                    }
                    disabled={item.unavailable || false}
                    value={item.name}
                  >
                    {({ selected }) => (
                      <div className="th-flex th-justify-between">
                        <span
                          className={`th-block th-truncate ${
                            selected ? "th-font-medium" : "th-font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span className="th-text-Text-100">
                            <CheckIcon />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectBox;
