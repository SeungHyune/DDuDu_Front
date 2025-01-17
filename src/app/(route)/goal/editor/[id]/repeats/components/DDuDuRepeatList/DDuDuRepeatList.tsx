"use client";

import { Fragment } from "react";

import { GoalTodoListItem } from "@/app/_components/server";
import { useGoalDetail } from "@/app/_hooks";

import { DAY_OF_WEEK_STRING } from "../../../repeat/components/DDuDuRepeatForm/DDuDuRepeatForm.constants";

interface DDuDuRepeatListProps {
  goalId: string;
}

const DDuDuRepeatList = ({ goalId }: DDuDuRepeatListProps) => {
  const { goalDetail } = useGoalDetail({ goalId });

  if (!goalDetail) {
    return;
  }

  const { repeatDdudus: repeatDDuDu } = goalDetail;

  return (
    <>
      {repeatDDuDu.length > 0 ? (
        <ul className="flex flex-col max-h-[19rem] gap-[0.8rem]">
          {repeatDDuDu.map(({ id, name, repeatPattern, startDate, endDate }) => (
            <Fragment key={id}>
              <GoalTodoListItem
                id={id}
                title={name}
                repeatDays={
                  (repeatPattern.repeatType === "WEEKLY"
                    ? repeatPattern.repeatDaysOfWeek
                        ?.map((weekDay) => DAY_OF_WEEK_STRING[weekDay])
                        .join(" ")
                    : repeatPattern.repeatDaysOfMonth?.join(" ")) || "매일"
                }
                startDate={startDate}
                endDate={endDate}
                goalId={goalId}
                bgColor="#FFFFFF"
              />
            </Fragment>
          ))}
        </ul>
      ) : (
        <div className="text-center text-size13 text-example_gray_800">
          반복 설정된 투두 리스트가 존재하지 않습니다.
        </div>
      )}
    </>
  );
};

export default DDuDuRepeatList;
