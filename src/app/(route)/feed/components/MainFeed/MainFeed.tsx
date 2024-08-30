"use client";

import { Fragment, useMemo } from "react";

import { FeedCalender } from "@/app/_components/client/Calender";
import { MonthlyGoalsType } from "@/app/_components/client/Calender/FeedCalender/FeedCalender";
import { getDailyList, getMonthlyDDuDus } from "@/app/_services/client";
import { MonthlyDDuDuType } from "@/app/_types/response/feed/feed";
import { useQuery } from "@tanstack/react-query";

import { MainGoalItem } from "..";
import { MainDailyListType } from "../../feed.types";

import { useSession } from "next-auth/react";

interface MainFeedProps {
  monthlyGoals: MonthlyGoalsType[];
  selectedDDuDu: string;
}

const MainFeed = ({ monthlyGoals, selectedDDuDu }: MainFeedProps) => {
  const selectedDate = useMemo(() => {
    return selectedDDuDu.slice(0, 7);
  }, [selectedDDuDu]);
  const { data: session } = useSession();
  const { data: dailyList } = useQuery<MainDailyListType[]>({
    queryKey: ["dailyList", selectedDDuDu],
    queryFn: () =>
      getDailyList({
        accessToken: session?.sessionToken as string,
        userId: session?.user.userId as number,
        date: selectedDDuDu,
      }),
  });

  const { data: monthlyDDuDus } = useQuery<MonthlyDDuDuType[]>({
    queryKey: ["monthlyDDuDus"],
    queryFn: () =>
      getMonthlyDDuDus({
        accessToken: session?.sessionToken as string,
        userId: session?.user.userId as number,
        date: selectedDate,
      }),
  });

  return (
    <>
      <FeedCalender
        monthlyDDuDus={monthlyDDuDus || []}
        monthlyGoals={monthlyGoals}
        selectedDDuDu={selectedDDuDu}
      />
      <ul className="mt-[2rem]">
        {dailyList?.map(({ goal, ddudus }, index) => (
          <Fragment key={index}>
            <MainGoalItem
              goal={goal}
              ddudus={ddudus}
            />
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default MainFeed;
