"use client";
import Image from "next/image";
import Card from "@/Dash/app/components/Card";
import Link from "next/link";
import {
  FilterIcon,
  SearchIcon,
  StatsIcon,
  MenuIcon,
} from "@/Dash/app/components/Icon";

import AddCard from "@/Dash/app/components/AddCard";
import { useState, useEffect } from "react";
import useLocalStorageList from "@/Dash/app/utils/random-functions";
import Nav from "@/Dash/app/components/Nav";
import Stats from "@/Dash/app/components/Stats";
import { Transition } from "@headlessui/react";
import Sidebar from "@/Dash/app/components/SideBar";
import SideNav from "@/Dash/app/components/SideNav";
// Interface for the assessment objects
export interface Assessment {
  // Define your assessment properties here
  "assessment-name": string;
  duration: string;
  description: string;
  items: string[];
  purpose: string;
  // Add more properties as needed
}
export default function Home() {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [showState, setShowState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { items } = useLocalStorageList("assessments");
  useEffect(() => {
    items;
  }, [items]);

  return (
    <main className="flex flex-col items-center justify-between p-24 th-min-h-dvh th-p-1 th-max-w-[90rem] th-bg-white">
      <aside className="md:th-hidden th-flex">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} title="Menu">
          <SideNav />
        </Sidebar>
      </aside>
      <div className="th-flex th-px-3.5 md:th-hidden th-py-4 th-justify-between th-items-center th-w-full">
        <div className="th-flex th-items-center th-gap-x-2.5">
          <button
            aria-label="show sidebar button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            <span className="th-sr-only">show sidebar button</span>
            <MenuIcon />
          </button>
          <p className="th-text-base th-font-semibold th-text-Text-100 th-leading-6">
            Assessment
          </p>
        </div>
      </div>
      <div className="th-grid md:th-grid-cols-9 th-relative th-max-w-full th-min-h-max th-gap-x-6">
        <aside className="md:th-col-span-1 th-bg-white th-rounded-b-xl th-gap-y-6 th-min-h-[70vh] th-hidden md:th-flex th-flex-col th-w-full th-p-5 th-divide-y th-divide-x-0 th-divide-System-stroke2 th-divide-dashed">
          <Nav />
        </aside>
        <section className="md:th-col-span-7 md:th-grid-rows-9 th-grid th-h-min th-max-w-full">
          <section className="md:th-row-span-1 th-max-h-20 th-border-b th-truncate th-border-System-stroke2 th-flex md:th-flex-row -th-mx-0.5 md:th-mx-0 md:th-px-6 th-bg-white th-w-full th-items-center th-gap-6 md:th-divide-x md:th-divide-y-0 md:th-divide-System-stroke2">
            <div className="th-hidden md:th-flex th-relative -th-bottom-3">
              <p className="th-text-xl th-leading-7 th-text-Text-100 th-font-semibold">
                Assessment
              </p>
            </div>
            <div className="th-flex th-items-center th-gap-6 th-h-full th-divide-x th-relative -th-bottom-2.5 th-divide-y-0 md:th-divide-x-0 th-divide-System-stroke2">
              <div className="th-my-2.5 md:th-my-0 th-py-4 th-px-6 th-border-b-4 th-border-Secondary-1">
                <Link
                  href="!#"
                  className="th-no-underline th-text-sm th-relative th-leading-normal th-font-semibold th-text-Secondary-1"
                >
                  My Assessments
                </Link>
              </div>
              <Link
                href="!#"
                className="th-no-underline th-text-sm th-px-6 th-leading-normal md:th-hidden th-font-semibold th-text-Text-100"
              >
                Unstop Assessments
              </Link>
            </div>
          </section>

          <section className="md:th-row-span-8 th-flex th-flex-col md:th-gap-8 th-p-4 md:th-p-6 th-rounded-b-xl th-bg-white">
            <section className=" th-hidden md:th-flex th-flex-col th-gap-y-4">
              <p className="th-text-lg th-left-6 th-font-medium th-text-Text-100">
                Assessments Overview
              </p>
              <Stats />
            </section>
            <section className="md:th-hidden th-flex th-flex-col th-gap-y-4">
              <Transition
                show={showState}
                enter="th-transition th-ease-in-out th-duration-300 th-transform"
                enterFrom="-th-translate-y-full"
                enterTo="th-translate-y-0"
                leave="th-transition th-ease-in-out th-duration-300 th-transform"
                leaveFrom="th-translate-y-0"
                leaveTo="-th-translate-y-full"
              >
                <Stats />
              </Transition>
            </section>
            <section className="th-flex th-flex-col th-gap-y-4">
              <div className="th-flex th-justify-between th-items-center">
                <p className="th-text-lg th-left-6 th-font-medium th-text-Text-100">
                  My Assessment
                </p>
                <div className="md:th-hidden th-flex th-items-center th-gap-1.5">
                  <button
                    aria-label="search button"
                    className="th-bg-white th-h-12 th-w-12 th-flex th-justify-center th-items-center"
                  >
                    <span className="th-sr-only">search button</span>

                    <SearchIcon path="th-fill-Text-100" />
                  </button>
                  <button
                    aria-label="filter button"
                    className="th-bg-white th-h-12 th-w-12 th-flex th-justify-center th-items-center"
                  >
                    <span className="th-sr-only">filter button</span>

                    <FilterIcon path="th-fill-Text-100" />
                  </button>
                  <button
                    aria-label="show stats  button"
                    onClick={() => setShowState(!showState)}
                    className="th-bg-white th-h-12 th-w-12 th-flex th-justify-center th-items-center"
                  >
                    {" "}
                    <span className="th-sr-only"> show stats button</span>
                    <StatsIcon path="th-fill-Text-100" />
                  </button>
                </div>
              </div>
              <div className="th-grid th-gap-7 th-w-full lg:th-grid-cols-2 xl:th-grid-cols-3">
                <AddCard
                  assessments={assessments}
                  setAssessments={setAssessments}
                />
                {items.map((assessment, index) => (
                  <div className="th-grid" key={assessment + index}>
                    <Card assessment={assessment} index={index} />
                  </div>
                ))}
              </div>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
}
