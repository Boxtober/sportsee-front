export const getMockUserData = () => {
    return {
        id: 1,
        userInfos: {
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
        },
    };
};

export const getMockUserActivity = () => {
    return [
        { day: "2024-11-01", calories: 300 },
        { day: "2024-11-02", calories: 350 },
        { day: "2024-11-03", calories: 400 },
        { day: "2024-11-04", calories: 420 },
    ];
};
