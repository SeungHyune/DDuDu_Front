import { DayContentProps } from "react-day-picker";

import { MonthlyWeeklyDDuDuType } from "@/app/_types/response/feed/feed";

import useFeedCalendarDayConetent from "../../hooks/useFeedCalendarDayContent/useFeedCalendarDayContent";
import DailyDDuDu from "../DailyDDuDu/DailyDDuDu";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface FeedCalendarDayContentProps {
  props: DayContentProps;
  monthlyDDuDus: MonthlyWeeklyDDuDuType[];
  currentURL: string;
  selectedDDuDuDate?: string;
}

const FeedCalendarDayContent = ({
  props,
  monthlyDDuDus,
  currentURL,
  selectedDDuDuDate,
}: FeedCalendarDayContentProps) => {
  const { isToday, selectedDate, formattedDate } = useFeedCalendarDayConetent(props);

  const router = useRouter();

  const dailyDDuDuDate = monthlyDDuDus.find((ddudu) => ddudu.date === formattedDate);

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center gap-2 w-[4.2rem] h-[5.4rem] text-size11",
        (selectedDDuDuDate === formattedDate || (!selectedDDuDuDate && isToday)) &&
          "font-bold bg-example_gray_300 rounded-radius5",
      )}
      onClick={() => router.replace(`${currentURL}&date=${formattedDate}`)}
    >
      {dailyDDuDuDate && dailyDDuDuDate.totalCount > 0 ? (
        <DailyDDuDu
          totalCount={dailyDDuDuDate.totalCount}
          doneCount={dailyDDuDuDate.totalCount - dailyDDuDuDate.uncompletedCount}
          restCount={dailyDDuDuDate.uncompletedCount}
        />
      ) : (
        <div className="rounded-full shrink-0 w-[2.4rem] h-[2.4rem] bg-example_gray_100 flex justify-center items-center" />
      )}

      <p className="text-example_gray_800">{selectedDate}</p>
    </div>
  );
};

export default FeedCalendarDayContent;
