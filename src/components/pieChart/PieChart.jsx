import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useResponsiveHeight from "../../utils/ResponsiveHeight";

const COLORS = ["#FF0000", "#FBFBFB"]; // score et restant

const PieChartComponent = ({ userData }) => {
    const containerHeight = useResponsiveHeight();
    if (!userData) {
        return;
    }

    // recup "todayScore" ou "score"
    const score = userData.todayScore || userData.score;

    // structure des données
    const data = [
        { name: "Score", value: score },
        { name: "Rest", value: 1 - score },
    ];

    return (
        <ResponsiveContainer
            width="100%"
            height={containerHeight}
            focusable="false"
            style={{
                outline: "none",
            }}
            tabIndex={-1}
        >
            <PieChart
                className="custom-pie-chart"
                tabIndex={-1} // empêche l'élément d'être focusable
                focusable="false"
                style={{
                    outline: "none",
                    backgroundColor: "#FBFBFB",
                }}
            >
                <text
                    x="15%"
                    y="15%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontSize: "16px", fill: "#000000" }}
                >
                    Score
                </text>

                <Pie
                    style={{
                        outline: "none",
                    }}
                    data={[{ value: 1 }]}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={70}
                    fill="#FFF"
                    stroke="none"
                    isAnimationActive={false}
                />
                <Pie
                    style={{
                        outline: "none",
                    }}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                    cornerRadius={10}
                    isAnimationActive={true}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            stroke="#FBFBFB"
                        />
                    ))}
                </Pie>

                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontSize: "26px", fontWeight: "bold" }}
                >
                    {`${(score * 100).toFixed(0)}%`}
                </text>

                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        fill: "#74798C",
                    }}
                >
                    <tspan x="50%" dy="0">
                        de votre
                    </tspan>
                    <tspan x="50%" dy="1.2em">
                        objectif
                    </tspan>
                </text>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;
