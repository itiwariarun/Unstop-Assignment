"use client";
import React, { useState } from "react";
import { AddIcon } from "./Icon";
import FormModal from "./FormModal";
import { Assessment } from "../page";

interface IAppProps {
  assessments?: Assessment[];
  setAssessments?: any;
}

const AddCard: React.FunctionComponent<IAppProps> = (props) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="lg:th-max-w-xs hover:th-scale-95 th-duration-300 th-min-w-full th-flex th-border th-max-w-sm th-items-center th-h-full th-justify-center th-text-center th-p-7 th-flex-col th-gap-y-2.5 th-border-dashed th-border-System-stroke2 th-rounded-xl th-divide-x th-divide-y-0 th-divide-System-stroke2"
      >
        <div className="th-bg-white th-rounded-full">
          <AddIcon path="th-fill-Secondary-1" rect="th-fill-white" />
        </div>
        <h3 className="th-text-lg th-text-Text-100 th-pb-0.5 th-leading-normal th-font-medium">
          New Assessment
        </h3>
        <p className="th-text-xs th-text-Text-100 th-font-medium th-leading-normal">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </button>
      <FormModal
        setIsOpen={setIsOpen}
        assessments={props.assessments}
        isOpen={isOpen}
      />
      <div className="th-absolute th-bottom-1/4 th-right-4 md:th-hidden">
        <button
          onClick={openModal}
          className="th-h-20 th-w-20 th-flex th-items-center th-justify-center th-bg-Secondary-1 th-rounded-full"
        >
          <AddIcon path="th-fill-white" />
        </button>
      </div>
    </>
  );
};

export default AddCard;
