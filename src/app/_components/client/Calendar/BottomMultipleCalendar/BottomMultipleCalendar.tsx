"use client";

import { bottomSheetCalendarStyles } from "../calendar.styles";

import { CaptionLabelProps, DayPicker } from "react-day-picker";

import ChevronLeftIcon from "@/app/_components/server/icons/ChevronLeftIcon/ChevronLeftIcon";
import ChevronRightIcon from "@/app/_components/server/icons/ChevronRightIcon/ChevronRightIcon";

import { ko } from "date-fns/locale/ko";

export interface BottomMultipleCalendarProps {
  selected: Date[];
  setSelected: (dates: Date[] | undefined) => void;
}

const BottomMultipleCalendar = ({ selected, setSelected }: BottomMultipleCalendarProps) => {
  return (
    <DayPicker
      locale={ko}
      fixedWeeks
      mode={"multiple"}
      selected={selected}
      onSelect={(date) => {
        setSelected(date);
      }}
      className="w-full"
      classNames={bottomSheetCalendarStyles}
      components={{
        CaptionLabel: (date: CaptionLabelProps) => (
          <section className="flex text-size15 gap-2 w-full">
            <p>
              {date.displayMonth.getFullYear()} {date.displayMonth.getMonth() + 1}월
            </p>
          </section>
        ),
        IconLeft: ({ ...props }) => (
          <ChevronLeftIcon
            {...props}
            className="h-5 w-5"
          />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRightIcon
            {...props}
            className="h-5 w-5"
          />
        ),
      }}
    />
  );
};

export default BottomMultipleCalendar;
