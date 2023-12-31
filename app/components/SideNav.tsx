import React from "react";
import {
  Dashboard,
  Assessment,
  Library,
  RoundStatus,
  AssessmentStack,
  UserIcon,
  WebIcon,
  Share,
  AddIcon,
} from "./Icon";

import { Button } from "./Buttons/SideNavButtons";
type Props = {};

function SideNav({}: Props) {
  return (
    <aside className="th-grid th-w-full th-gap-y-3 th-divide-x-0 th-divide-y th-divide-dashed th-divide-System-stroke2">
      <div className="th-grid th-w-full th-gap-y-3">
        <Button className="th-flex !th-min-w-full !th-flex-row th-font th-font-semibold th-group !th-justify-start th-py-3 th-gap-x-3 focus:th-scale-100 focus:th-text-Secondary-1 active:th-bg-Accent-Blue-Light focus:th-bg-Accent-Blue-Light active:th-text-Secondary-1 active:th-scale-100 hover:th-scale-100 active:th-outline-1  focus:th-outline active:th-outline th-px-3 active:th-outline-Secondary-1 focus:th-outline-1 focus:th-outline-Secondary-1">
          <Dashboard path="th-fill-black group-focus:th-fill-Secondary-1 group-active:th-fill-Secondary-1" />
          <span>Dashboard</span>
        </Button>
        <Button className="th-flex !th-min-w-full !th-flex-row th-font th-font-semibold th-group !th-justify-start th-py-3 th-gap-x-3 focus:th-scale-100 focus:th-text-Secondary-1 active:th-bg-Accent-Blue-Light focus:th-bg-Accent-Blue-Light active:th-text-Secondary-1 active:th-scale-100 hover:th-scale-100 active:th-outline-1  focus:th-outline active:th-outline th-px-3 active:th-outline-Secondary-1 focus:th-outline-1 focus:th-outline-Secondary-1">
          <Library path="th-fill-black group-focus:th-fill-Secondary-1 group-active:th-fill-Secondary-1" />
          <span>Assessment</span>
        </Button>
        <Button className="th-flex !th-min-w-full !th-flex-row th-font th-font-semibold th-group !th-justify-start th-py-3 th-gap-x-3 focus:th-scale-100 focus:th-text-Secondary-1 active:th-bg-Accent-Blue-Light focus:th-bg-Accent-Blue-Light active:th-text-Secondary-1 active:th-scale-100 hover:th-scale-100 active:th-outline-1  focus:th-outline active:th-outline th-px-3 active:th-outline-Secondary-1 focus:th-outline-1 focus:th-outline-Secondary-1">
          <Assessment path="th-fill-black group-focus:th-fill-Secondary-1 group-active:th-fill-Secondary-1" />
          <span>My Library</span>
        </Button>
      </div>
      <div className="th-flex th-justify-between th-items-center th-w-full th-gap-x-5 th-pt-6">
        <Button className="th-flex  !th-flex-row th-w-full th-font th-font-semibold th-group !th-justify-start th-py-3 th-gap-x-3 focus:th-scale-100 focus:th-text-Secondary-1 active:th-bg-Accent-Blue-Light focus:th-bg-Accent-Blue-Light active:th-text-Secondary-1 active:th-scale-100 hover:th-scale-100 active:th-outline-1  focus:th-outline active:th-outline th-px-3 active:th-outline-Secondary-1 focus:th-outline-1 focus:th-outline-Secondary-1">
          <RoundStatus path="th-fill-black group-focus:th-fill-Secondary-1 group-active:th-fill-Secondary-1" />
          <span>Round Status</span>
        </Button>
        <div className="th-max-w-fit th-py-2 th-px-4 th-cursor-pointer th-rounded-full th-border th-border-Accent-new-Red">
          <p className="th-text-xs th-font-medium th-leading-normal th-text-Accent-new-Red">
            Admin
          </p>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
