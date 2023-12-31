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

const Nav = (props: Props) => {
  return (
    <header>
      <div className="th-flex th-justify-center th-gap-y-1 th-items-center th-flex-col">
        <Button className="hover:th-outline-1 hover:th-outline hover:th-text-Secondary-1 th-group hover:th-outline-Secondary-1">
          <Dashboard
            path="th-fill-black group-hover:th-fill-Secondary-1"
            rect="th-fill-white"
          />
          <span>Dashboard</span>
        </Button>
        <Button className="hover:th-outline-1 hover:th-outline hover:th-text-Secondary-1 th-group hover:th-outline-Secondary-1">
          <Library
            path="th-fill-black group-hover:th-fill-Secondary-1"
            rect="th-fill-white"
          />
          <span>Assessment</span>
        </Button>
        <Button className="hover:th-outline-1 hover:th-outline hover:th-text-Secondary-1 th-group hover:th-outline-Secondary-1">
          <Assessment
            path="th-fill-black group-hover:th-fill-Secondary-1"
            rect="th-fill-white"
          />
          <span>My Library</span>
        </Button>
      </div>
      <div className="th-flex th-pt-6 th-gap-y-2.5 th-justify-center th-items-center th-flex-col">
        <div className="th-max-w-fit th-py-2 th-px-4 th-cursor-pointer th-rounded-full th-border th-border-Accent-new-Red">
          <p className="th-text-xs th-font-medium th-leading-normal th-text-Accent-new-Red">
            Admin
          </p>
        </div>
        <Button className="hover:th-outline-1 hover:th-outline hover:th-text-Secondary-1 th-group hover:th-outline-Secondary-1">
          <RoundStatus
            path="th-fill-black group-hover:th-fill-Secondary-1"
            rect="th-fill-white"
          />
          <span>Round Status</span>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
