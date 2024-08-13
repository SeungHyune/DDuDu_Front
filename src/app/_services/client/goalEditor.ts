import { fetchApi } from "@/app/_api/";
import { GOAL_EDITOR } from "@/app/_constants";
import { GoalRequestType } from "@/app/_types/request/goal/goal";

export const getGoalEditorData = async (accessToken: string, goalId: string) => {
  const response = await fetchApi(`${GOAL_EDITOR.DATA}/${goalId}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["goal", "editor", goalId],
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

interface FetchCreateGoalProps {
  accessToken: string;
  goalData: GoalRequestType;
}

export const fetchCreateGoal = async ({ accessToken, goalData }: FetchCreateGoalProps) => {
  const response = await fetchApi(`${GOAL_EDITOR.DATA}`, {
    method: "POST",
    body: JSON.stringify(goalData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["goal", "create"],
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

interface FetchEditGoalProps {
  accessToken: string;
  goalData: GoalRequestType;
  goalId: string;
}

export const fetchEditGoal = async ({ accessToken, goalData, goalId }: FetchEditGoalProps) => {
  const response = await fetchApi(`${GOAL_EDITOR.DATA}/${goalId}`, {
    method: "PUT",
    body: JSON.stringify(goalData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["goal", "edit", goalId],
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

interface FetchDeleteGoalProps {
  accessToken: string;
  goalId: string;
}

export const fetchDeleteGoal = async ({ accessToken, goalId }: FetchDeleteGoalProps) => {
  const response = await fetchApi(`${GOAL_EDITOR.DATA}/${goalId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["goal", "delete", goalId],
    },
  });

  if (response.status === 204) {
    return;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

interface FetchStatusChangeGoalProps {
  accessToken: string;
  goalId: string;
  status: "IN_PROGRESS" | "DONE";
}

export const fetchStatusChangeGoal = async ({
  accessToken,
  goalId,
  status,
}: FetchStatusChangeGoalProps) => {
  const response = await fetchApi(`${GOAL_EDITOR.DATA}/${goalId}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["goal", "status"],
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
