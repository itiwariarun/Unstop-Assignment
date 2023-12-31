import React, { useState } from "react";
import { Briefcase, Calender, Share, CircleChip, IconStack } from "./Icon";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import IconChip from "./IconChip";
import useLocalStorageList from "../utils/random-functions";
import { Assessment } from "./../page";
import FormModal from "./FormModal";
import MenuItems from "./Menu";
import {
  isValidArray,
  timeToHoursAndMinutes,
} from "./../utils/random-functions";

interface IAppProps {
  index: number;
  assessment: {
    assessment_name: string;
    duration: string;
    description: string;
    purpose: string;
    itemsList?: [
      {
        name?: string;
        unavailable?: boolean;
      }
    ];
  };
}

const Card: React.FunctionComponent<IAppProps> = (props) => {
  const { addItem, removeItem } = useLocalStorageList("assessments");
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const handleRemoveItem = (index: number) => {
    removeItem(index);
  };
  const currentDate = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };

  const formattedDate = currentDate.toLocaleDateString("en-US", options as any);
  const list = props.assessment.itemsList;

  const minutes = timeToHoursAndMinutes(props?.assessment?.duration);
  return (
    <>
      <div className="xl:th-max-w-xs hover:th-scale-95 th-duration-300 th-min-w-full th-border th-h-full th-bg-white th-border-System-stroke2 th-p-4 th-max-w-sm th-rounded-xl">
        <div className="th-flex th-divide-y th-divide-x-0 th-gap-y-5 th-divide-dashed th-divide-System-stroke2 th-justify-between th-flex-col">
          <hgroup className="th-flex th-justify-between th-w-full th-items-start th-gap-6">
            <div className="th-flex th-items-center md:th-items-start md:th-flex-col th-gap-2.5">
              <IconChip
                className="th-bg-Accent-Purple-Light"
                iconLayout="!th-px-0 !th-py-0"
                icon={<Briefcase path="th-fill-Accent-Purple" />}
              />
              <div className="th-flex th-flex-col th-gap-y-1">
                <h2 className="th-text-lg th-font-medium th-leading-6 th-divide-System-stroke2 th-text-Text-100">
                  {props.assessment.assessment_name}
                </h2>
                <div className="th-flex th-items-center th-gap-2.5 th-divide-x">
                  <p className="th-text-Text-100 th-text-sm th-leading-5 th-font-semibold">
                    Job
                  </p>
                  <time className="th-flex th-items-center th-px-2.5 th-gap-x-1">
                    <Calender path="th-fill-Text-100" />
                    <p className="th-text-xs th-text-Primary-50 th-pt-0.5">
                      {formattedDate}
                    </p>
                  </time>
                </div>
              </div>
            </div>
            <MenuItems
              deleteHandle={() => handleRemoveItem(props.index)}
              editModal={openModal}
            />
          </hgroup>
          <footer className="th-pt-4 th-flex th-justify-between th-items-center">
            <div className="th-flex th-items-center th-gap-x-3.5">
              <div className="th-fklex th-flex-col th-gapy-1">
                <p className="th-text-sm th-font-semibold th-leading-5 th-text-Text-100">
                  {props?.assessment?.duration ? `${minutes}` : "00"}
                </p>
                <p className="th-text-xs th-font-semibold th-leading-5 th-text-Text-100">
                  Duration
                </p>
              </div>
              <div className="th-fklex th-flex-col th-gapy-1">
                <p className="th-text-sm th-font-semibold th-leading-5 th-text-Text-100">
                  {props?.assessment?.purpose ? "01" : "00"}
                </p>
                <p className="th-text-xs th-font-semibold th-leading-5 th-text-Text-100">
                  Questions
                </p>
              </div>
            </div>
            <div className="th-flex th-items-center th-gap-x-2.5">
              <button
                type="button"
                className="th-bg-white th-border th-text-sm th-leading-5 th-font-medium th-text-Text-100 th-border-Text-100 th-py-1 th-px-2 th-flex th-items-center th-rounded-full th-gap-1"
              >
                <span>
                  <Share rect="th-fill-white" path="th-fill-Text-100" />
                </span>
                <span>Share</span>
              </button>
              <div className="th-relative th-group th-flex th-gap-1 th-items-center">
                {isValidArray(list as any) &&
                  list?.slice(0, 3)?.map((item, index) => (
                    <div key={index} className="first:th-ml-0 -th-ml-5">
                      <CircleChip title={item as any} />
                    </div>
                  ))}
                {"   "}
                <span className="th-text-xs">
                  {" "}
                  {`${
                    (list?.length as any) > 2
                      ? `+${(list?.length as any) - 2}`
                      : ""
                  }`}
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <FormModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        defaultValue={props.assessment as any}
        index={props.index}
      />
    </>
  );
};

export default Card;
