import React, { useState, useEffect } from "react";
import { AssessmentStack, UserIcon, WebIcon, Share } from "./Icon";
import IconChip, { ChipText } from "./IconChip";
import useLocalStorageList from "../utils/random-functions";
import { purpose } from "../utils/data";
import { Assessment } from "./../page";

type Props = {};

const Stats = (props: Props) => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const { items } = useLocalStorageList("assessments");
  useEffect(() => {
    items;
  }, [items]);
  return (
    <div className="th-flex th-flex-wrap xl:th-flex-nowrap th-bg-white th-border th-border-System-stroke2 th-rounded-xl th-divide-x th-divide-y-0 th-divide-System-stroke2">
      <div className="th-order-1">
        <IconChip
          className="th-bg-Accent-Purple-Light"
          heading="Total Assesssment"
          title={items.length || 0}
          icon={
            <AssessmentStack
              rect="th-fill-white"
              path="th-fill-Accent-Purple"
            />
          }
        >
          <ChipText title={items.length || 0} />
        </IconChip>
      </div>
      <div className="th-order-3">
        <IconChip
          className="th-bg-Accent-Purple-Light"
          heading="Candidates"
          title="34"
          icon={<UserIcon path="th-fill-Accent-Purple" />}
        >
          <ChipText
            title="11,145"
            positiveChange="+ 89"
            subTitle="Total Candidate"
          />
          <div className="th-px-5">
            <ChipText
              title="114"
              positiveChange="+89"
              subTitle="Who Attempted"
            />
          </div>
        </IconChip>
      </div>
      <div className="th-order-4">
        <IconChip
          className="th-bg-Accent-Pink-Light"
          heading="Candidates"
          title="34"
          icon={<WebIcon path="th-fill-Accent-Pink" />}
        >
          <ChipText title="11,000" positiveChange="+ 89" subTitle="E-mail" />
          <div className="th-pl-5">
            <ChipText
              title="145"
              positiveChange="+89"
              subTitle="Social Share"
            />
          </div>
          <div className="th-pl-5">
            <ChipText title="145" positiveChange="+89" subTitle="Unique Link" />
          </div>
        </IconChip>
      </div>
      <div className="th-order-2 lg:th-order-4">
        <IconChip
          className="th-bg-white th-rotate-45"
          heading="Total Purpose"
          icon={<Share rect="th-fill-white" path="th-fill-Secondary-1" />}
        >
          <ChipText title={purpose.length} />
        </IconChip>
      </div>
    </div>
  );
};

export default Stats;
