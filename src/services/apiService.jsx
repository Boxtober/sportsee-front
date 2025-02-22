import axios from "axios";
import mockData from "../mocks/mocksData";
import { IS_MOCK, BASE_URL } from "./config";

export const getUserMainData = async (userId) => {
  if (IS_MOCK) {
    return mockData.USER_MAIN_DATA.find((user) => user.id === userId);
  }
  if (!userId) return null;

  const { data } = await axios.get(`${BASE_URL}/user/${userId}`);
  return data.data;
};

export const getUserActivity = async (userId) => {
  if (IS_MOCK) {
    return mockData.USER_ACTIVITY.find(
      (activity) => activity.userId === userId
    );
  }
  if (!userId) return null;
  const { data } = await axios.get(`${BASE_URL}/user/${userId}/activity`);
  return data.data;
};

export const getUserAverageSessions = async (userId) => {
  if (IS_MOCK) {
    return mockData.USER_AVERAGE_SESSIONS.find(
      (session) => session.userId === userId
    );
  }
  if (!userId) return null;
  const { data } = await axios.get(
    `${BASE_URL}/user/${userId}/average-sessions`
  );
  return data.data;
};

export const getUserPerformance = async (userId) => {
  if (IS_MOCK) {
    return mockData.USER_PERFORMANCE.find(
      (performance) => performance.userId === userId
    );
  }
  if (!userId) return null;
  const { data } = await axios.get(`${BASE_URL}/user/${userId}/performance`);
  return data.data;
};
