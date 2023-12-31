import { ReactNode } from "react";

interface IAppProps {
  title?: string | number;
  icon?: ReactNode;
  subTitle?: string;
  children?: ReactNode;
  positiveChange?: string;
  negativeChange?: string;
  heading?: string;
  className?: string;
  type?: string;
  iconLayout?: string;
}
const IconChip: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div
      className={`th-py-4 th-px-5 th-gap-y-4 th-flex th-flex-col ${props.iconLayout}`}
    >
      {props.heading ? (
        <h2 className="th-text-sm th-font-semibold th-leading-5 th-text-Text-100">
          {props.heading}
        </h2>
      ) : null}
      <div className="th-flex th-items-center th-gap-x-2.5">
        <div
          className={` th-p-3.5 th-rounded-lg th-max-w-fit ${props.className}`}
        >
          {props.icon}
        </div>
        <div className="th-flex th-divide-y-0 th-divide-x th-gap-x-5 th-items-center th-divide-System-stroke2">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default IconChip;
export const ChipText: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="th-flex th-flex-col th-gap-y-0.5">
      <div className="th-flex th-gap-x-1 th-items-center">
        {" "}
        {props.title ? (
          <p className="th-text-xl th-font-bold th-leading-7 th-text-Text-100">
            {props.title}
          </p>
        ) : null}
        {props.positiveChange ? (
          <p className="th-text-xs th-text-Status-Success th-font-medium th-leading-4">
            {props.positiveChange}
          </p>
        ) : null}
        {props.negativeChange ? (
          <p className="th-text-xs th-text-Accent-new-Red th-font-medium th-leading-4">
            {props.negativeChange}
          </p>
        ) : null}
      </div>{" "}
      {props.subTitle ? (
        <p className="th-text-Text-100 th-text-xs th-font-medium th-leading-4">
          {props.subTitle}
        </p>
      ) : null}
    </div>
  );
};
