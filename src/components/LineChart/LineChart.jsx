import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    // CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
} from "recharts";

import "./linechart.scss";

const LineChartComponent = ({ userData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!userData || !userData.sessions) {
        return;
    }

    const data = userData.sessions.map((session) => ({
        date: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
        sessionLength: session.sessionLength,
    }));

    const CustomCursor = (props) => {
        const { points, width, height } = props;
        const { x, y } = points[0];
        return (
            <Rectangle
                fill="#000000"
                stroke="#000000"
                opacity={0.0975}
                x={x}
                y={y}
                width={width}
                height={height}
            />
        );
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                stroke="none"
                data={data}
                // padding={{
                //     top: 0,
                //     right: 10,
                //     left: 10,
                //     bottom: 10,
                // }}
                // margin={{
                //     top: 10,
                //     right: 0,
                //     left: -50,
                //     bottom: 0,
                // }}
                style={{
                    backgroundColor: "#FF0101",
                }}
                onMouseMove={(e) => {
                    if (e && e.activeTooltipIndex !== undefined) {
                        setActiveIndex(e.activeTooltipIndex);
                    }
                }}
                onMouseLeave={() => setActiveIndex(null)}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis padding={{ left: 20, right: 20 }} dataKey="date" />
                <Tooltip
                    //dataKey="sessionLength"
                    //cursor={false} // suppr ligne Y ??
                    cursor={<CustomCursor />}
                    contentStyle={{
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "none",
                    }}
                    labelStyle={{
                        fontWeight: "bold",
                        color: "#000",
                    }}
                    itemStyle={{
                        color: "#000",
                    }}
                    // formatter={(value) => {
                    //     return `${value} min`;
                    // }}

                    // formatter={(value) => ` ${value} min`}
                />
                <legend></legend>
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#fff"
                    dot={(props) => {
                        const { cx, cy, index } = props;
                        return (
                            <circle
                                key={index}
                                cx={cx}
                                cy={cy}
                                r={6}
                                fill="#fff"
                                stroke="rgba(255, 255, 255, 0.20)"
                                strokeWidth={15}
                                style={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    transition: "opacity 0.3s ease",
                                }}
                            />
                        );
                    }}
                />
                {/* <XAxis tick={{ fill: "#FFFFFF", opacity: "0.5" }} /> */}
                <text x={50} y={50} fill="#fff" opacity="0.504" fontSize={16}>
                    Durée moyenne des sessions
                </text>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;
