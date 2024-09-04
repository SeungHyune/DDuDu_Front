export type MainGoalType = {
  id: number;
  name: string;
  color: string;
};

export type MainDDuDusType = {
  id: number;
  name: string;
  status: "COMPLETE" | "UNCOMPLETED";
};

export interface MainDailyListType {
  goal: MainGoalType;
  ddudus: MainDDuDusType[];
}

export interface MainDailyTimeTableType {
  timetable: MainTimeTableType[];
  unassignedDdudus: MainDailyListType[];
}

export type MainTimeTableType = {
  beginAt: string;
  ddudus: {
    id: number;
    name: string;
    status: "COMPLETE" | "UNCOMPLETED";
    goalId: number;
  }[];
};

export interface DDuDuTimeType {
  beginAt: string;
  endAt: string;
}

export interface DDuDUTimeRangeType {
  beginHour: number;
  beginMin: number;
  endHour: number;
  endMin: number;
}
