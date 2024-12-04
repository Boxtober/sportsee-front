import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

import "./radarchart.scss";

const RadarChartComponent = ({ userData }) => {
    const [performanceData, setPerformanceData] = useState([]);

    useEffect(() => {
        if (userData) {
            // formate données reçues dans le bon format
            const formattedData = userData.data.map((item) => ({
                subject: userData.kind[item.kind], // convertie kind en texte
                A: item.value, // valeur de la performance
            }));
            setPerformanceData(formattedData);
        }
    }, [userData]);

    return (
        <ResponsiveContainer width="100%" height="100%">
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
                }}
            >
                <PolarGrid stroke="#fff" />
                <PolarAngleAxis dataKey="subject" color="#fff" />
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
