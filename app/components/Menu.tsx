import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { IconStack } from "./Icon";
import React from "react";

type Props = {
  editModal?: any;
  deleteHandle?: any;
};

const MenuItems = (props: Props) => {
  return (
    <Menu as="div" className="th-relative th-inline-block th-text-left">
      <span>
        <Menu.Button>
          <IconStack />
        </Menu.Button>
      </span>
      <Transition
        as={Fragment}
        enter="th-transition th-ease-out th-duration-100"
        enterFrom="th-transform th-opacity-0 th-scale-95"
        enterTo="th-transform th-opacity-100 th-scale-100"
        leave="th-transition th-ease-in th-duration-75"
        leaveFrom="th-transform th-opacity-100 th-scale-100"
        leaveTo="th-transform th-opacity-0 th-scale-95"
      >
        <Menu.Items className="th-absolute th-right-0 th-w-56 th-origin-top-right th-divide-y th-divide-gray-100 th-rounded-md th-bg-white th-shadow-lg th-ring-1 th-ring-black/5 focus:th-outline-none">
          <div className="th-px-1 th-py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={props.editModal}
                  className={`${
                    active
                      ? "th-bg-violet-500 th-text-white"
                      : "th-text-gray-900"
                  } group th-flex th-w-full th-items-center th-rounded-md th-px-2 th-py-2 th-text-sm`}
                >
                  {" "}
                  <EditInactiveIcon
                    className="th-mr-2 th-h-5 th-w-5"
                    aria-hidden="true"
                  />
                  Edit
                </button>
              )}
            </Menu.Item>
          </div>

          <div className="th-px-1 th-py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={props.deleteHandle}
                  className={`${
                    active
                      ? "th-bg-violet-500 th-text-white"
                      : "th-text-gray-900"
                  } group th-flex th-w-full th-items-center th-rounded-md th-px-2 th-py-2 th-text-sm`}
                >
                  <DeleteInactiveIcon
                    className="th-mr-2 th-h-5 th-w-5 th-text-violet-400"
                    aria-hidden="true"
                  />
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

function EditInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

export default MenuItems;
