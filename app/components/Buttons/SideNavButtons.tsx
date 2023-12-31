import React, { ReactNode } from "react";

export interface IAppProps {
  children: ReactNode;
  className?: string;
}

export function Button(props: IAppProps) {
  return (
    <button
      className={`th-flex th-bg-white th-w-28 th-rounded-lg hover:th-bg-Accent-Purple-Light th-duration-200 hover:th-scale-95 th-flex-col th-gap-y-2 th-items-center th-justify-center th-px-5 th-py-2.5 th-text-xs th-text-Text-100 th-font-medium th-leading-4 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
