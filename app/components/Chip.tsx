import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
  label?: string;
};

const Chip = (props: Props) => {
  return (
    <div
      className={`th-py-1.5 th-px-2.5 th-gap-x-1.5 th-text-xs th-leading-normal th-font-medium th-rounded-3xl th-max-h-fit th-max-w-fit th-text-Text-100 th-flex th-bg-Accent-Blue-Light ${props.className}`}
    >
      <p>{props?.label}</p>
      {props.children}
    </div>
  );
};

export default Chip;
