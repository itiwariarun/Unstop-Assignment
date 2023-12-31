import { Dialog, Transition } from "@headlessui/react";
import { IconCrossSmall } from "./Icon";
import { Fragment } from "react";

type DrawerProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sadibar({
  title = "",
  description = "",
  children,
  isOpen,
  setIsOpen,
}: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={isOpen}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="th-fixed th-z-30 th-inset-0 th-overflow-y-auto"
      >
        <div className="th-flex th-w-11/12 th-h-screen">
          <Transition.Child
            as={Fragment}
            enter="th-transition-opacity th-ease-in th-duration-300"
            enterFrom="th-opacity-0"
            enterTo="th-opacity-30"
            entered="th-opacity-30"
            leave="th-transition-opacity th-ease-out th-duration-300"
            leaveFrom="th-opacity-30"
            leaveTo="th-opacity-0"
          >
            <Dialog.Overlay className="z-40 fixed inset-0 bg-black" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="th-transition th-ease-in-out th-duration-300 th-transform"
            enterFrom="-th-translate-x-full"
            enterTo="th-translate-x-0"
            leave="th-transition th-ease-in-out th-duration-300 th-transform"
            leaveFrom="th-translate-x-0"
            leaveTo="-th-translate-x-full"
          >
            <div className="th-flex th-max-w-xs th-h-screen">
              <div
                className={`th-z-50 th-flex th-flex-col th-justify-between th-bg-white th-w-full
                         th-max-w-sm th-p-6 th-overflow-hidden th-text-left th-align-middle
                         th-shadow-xl`}
              >
                <div>
                  <Dialog.Title className="th-font-bold th-flex th-justify-between th-items-center th-text-sm th-mt-5 th-mb-10 md:th-text-4xl th-text-Text-100">
                    {title}
                    <button onClick={() => setIsOpen(!isOpen)}>
                      <IconCrossSmall
                        path="th-fill-Text-100"
                        rect="th-fill-white"
                      />
                    </button>
                  </Dialog.Title>
                  {children}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
