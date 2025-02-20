import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import useResponsiveHeight from "../../utils/ResponsiveHeight";

const RadarChartComponent = ({ userData }) => {
  const containerHeight = useResponsiveHeight();
  const [performanceData, setPerformanceData] = useState([]);

  const translations = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  useEffect(() => {
    if (userData) {
      const { data } = userData;

      const formattedData = data
        .map((item) => ({
          subject: translations[item.kind] || "Inconnu",
          A: item.value, // valeur de la performance
        }))
        .reverse(); // inverse l'ordre

      setPerformanceData(formattedData);
    }
  }, [userData]);

  return (
    <ResponsiveContainer
      width="100%"
      height={containerHeight}
      className={ResponsiveContainer}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performanceData}
        stroke="none"
        style={{
          backgroundColor: "#282D30",
          color: "#fff",
          stroke: "#fff",
          fontSize: "12",
        }}>
        <PolarGrid stroke="#fff" />
        <PolarAngleAxis
          dataKey="subject"
          color="#fff"
          tick={{ fill: "#fff", fontSize: 12 }}
        />
        <Radar
          name="Performance"
          dataKey="A"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
