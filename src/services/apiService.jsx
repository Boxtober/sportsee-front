// requetes de données mockées ET API

import axios from "axios";
import mockData from "../mocks/mocksData";

const BASE_URL = "http://localhost:3000";
const IS_MOCK = true;

export const getUserMainData = async (userId) => {
    if (IS_MOCK) {
        return mockData.USER_MAIN_DATA.find((user) => user.id === userId);
    }
    console.log(userId);
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data;
};

export const getUserActivity = async (userId) => {
    if (IS_MOCK) {
        return mockData.USER_ACTIVITY.find(
            (activity) => activity.userId === userId
        );
    }
    const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
    return response.data;
};

export const getUserAverageSessions = async (userId) => {
    if (IS_MOCK) {
        return mockData.USER_AVERAGE_SESSIONS.find(
            (session) => session.userId === userId
        );
    }
    const response = await axios.get(
        `${BASE_URL}/user/${userId}/average-sessions`
    );

    return response.data;
};

export const getUserPerformance = async (userId) => {
    if (IS_MOCK) {
        return mockData.USER_PERFORMANCE.find(
            (performance) => performance.userId === userId
        );
    }
    const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
    return response.data;
};
