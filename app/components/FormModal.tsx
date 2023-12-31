"use client";
import React, { Dispatch, SetStateAction, useEffect, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IconCross } from "@/Dash/app/components/Icon";
import SelectBox from "@/Dash/app/components/SelectBox";
import Input from "@/Dash/app/components/Input";
import MutliSelectInput from "@/Dash/app/components/MutliSelectInput";
import useLocalStorageList from "@/Dash/app/utils/random-functions";
import { isValidArray, isValidObject } from "@/Dash/app/utils/random-functions";
import { purpose, question } from "@/Dash/app/utils/data";
import { Assessment } from "@/Dash/app/page";

interface IAppProps {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<any>> | any;
  setAssessments?: Dispatch<SetStateAction<Assessment[]>>;
  assessments?: Assessment[];
  index?: number;
  defaultValue?: Assessment;
}

const FormModal: React.FunctionComponent<IAppProps> = (props) => {
  function closeModal() {
    props.setIsOpen(false);
  }
  const isEditing = typeof props.index !== "undefined";
  const defaultStates =
    isValidObject(props.defaultValue) && (props.defaultValue as any);
  const [itemsList, setItemsList] = useState<string[]>(
    (defaultStates.itemsList as any) || []
  );
  const [formData, setFormData] = useState(defaultStates); // State to hold form data
  const { addItem, removeItem, refetchList, updateItem } =
    useLocalStorageList("assessments");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    formData;
    refetchList;
  }, [formData, refetchList]);
  const dafaultValues = props.defaultValue;
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);
      const formDataObject = {} as any;
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      formDataObject["itemsList"] = itemsList;

      setFormData(formDataObject);

      if (isEditing) {
        await updateItem(props.index, formDataObject);
        refetchList();
      } else {
        await addItem(formDataObject);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error or display error message
    } finally {
      setIsLoading(false);
      setFormData({}); // Clear the form data
      closeModal();
      setItemsList([]);
    }
  }
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="th-relative th-z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="th-ease-out th-duration-300"
            enterFrom="th-opacity-0"
            enterTo="th-opacity-100"
            leave="th-ease-in th-duration-200"
            leaveFrom="th-opacity-100"
            leaveTo="th-opacity-0"
          >
            <div className="th-fixed th-inset-1 th-bg-black/25" />
          </Transition.Child>

          <div className="th-fixed th-translate-y-0 th-bottom-0 md:th-inset-y-12 th-inset-x-0 md:th-max-h-[90dvh]">
            <div className="th-flex th-max-h-dvh th-items-center th-justify-center md:th-p-4 th-text-center">
              <Transition.Child
                as={Fragment}
                enter="th-ease-out th-duration-300"
                enterFrom="th-opacity-0 th-scale-95"
                enterTo="th-opacity-100 th-scale-100"
                leave="th-ease-in th-duration-200"
                leaveFrom="th-opacity-100 th-scale-100"
                leaveTo="th-opacity-0 th-scale-95"
              >
                <Dialog.Panel className="th-w-full th-max-h-svh th-max-w-dvh md:th-max-w-xl th-flex th-flex-col th-divide-y th-divide-x-0 th-divide-System-stroke2 th-transform th-overflow-hidden th-rounded-2xl th-bg-white th-shadow-xl th-transition-all">
                  <Dialog.Title as="h3" className="font-medium th-p-6">
                    <div className="th-flex th-justify-between th-p-1.5 th-w-full th-items-center">
                      <p className="th-text-xl th-text-Text-100 th-leading-normal th-font-semibold">
                        Create new assessment
                      </p>
                      <button onClick={closeModal}>
                        <IconCross />
                      </button>
                    </div>
                  </Dialog.Title>
                  <form
                    onSubmit={onSubmit}
                    className="th-w-full th-overflow-y-auto  th-max-h-[30rem] md:th-max-h-max th-h-full th-px-6 th-py-5"
                  >
                    <div className="th-px-1.5 th-flex th-flex-col th-gap-y-5">
                      <Input
                        type="text"
                        placeHolder="Type Here"
                        name="assessment_name"
                        label=" Name of assessment"
                        defaultValue={formData?.assessment_name || ""} // Set the value explicitly
                      />
                      <SelectBox
                        name="purpose"
                        items={purpose}
                        placeHolder="Add Purpose"
                        label="Purpose of the test is"
                        defaultValue={formData.purpose || ""} // Set the value explicitly
                      />
                      <SelectBox
                        items={question}
                        name="description"
                        placeHolder="Add Description"
                        label="Description"
                        defaultValue={formData.description || ""} // Set the value explicitly
                      />
                      <MutliSelectInput
                        label="Skills"
                        items={itemsList}
                        setItems={setItemsList}
                        defaultValue={formData.itemsList || []} // Set the value explicitly
                      />
                      <Input
                        type={`${!isInputFocused ? "text" : "time"}`}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeHolder="HH:MM:SS"
                        step="1"
                        inputClass="placeholder:th-text-System-stroke2"
                        name="duration"
                        label=" Duration of assessment"
                        defaultValue={formData.duration || ""} // Set the value explicitly
                      />
                      <button
                        type="submit"
                        className="th-py-3 th-mt-4 th-px-8 th-rounded-lg th-bg-Secondary-1 th-flex th-justify-center th-items-center th-text-sm th-text-white th-leading-normal th-font-semibold"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FormModal;
