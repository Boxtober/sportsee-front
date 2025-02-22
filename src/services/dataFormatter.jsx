export const sessionDataFormatter = (userData) => {
  return userData.sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
};

export const dayDataFormatter = (sessions) => {
  return sessions.map((session) => ({
    date: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
    sessionLength: session.sessionLength,
  }));
};

export const scoreDataFormatter = (userData) => {
  const score = userData.todayScore || userData.score;

  return [
    { name: "Score", value: score },
    { name: "Rest", value: 1 - score },
  ];
};

export const translations = {
  1: "Cardio",
  2: "Énergie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

export const performanceDataFormatter = (userData) => {
  return userData.data
    .map((item) => ({
      subject: translations[item.kind] || "Inconnu",
      A: item.value,
    }))
    .reverse();
};
