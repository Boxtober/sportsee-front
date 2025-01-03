import React, { useState } from "react";
import {
    ComposedChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
} from "recharts";
import useResponsiveHeight from "../../utils/ResponsiveHeight";

const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    // const { x1, y1 } = points[1];
    // console.log(props);
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

const LineChartComponent = ({ userData }) => {
    const containerHeight = useResponsiveHeight();
    const [activeIndex, setActiveIndex] = useState(null);
    if (!userData || !userData.sessions) {
        return;
    }
    const realData = userData.sessions.map((session) => ({
        date: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
        sessionLength: session.sessionLength,
    }));

    const fakeDataStart = {
        date: "",
        sessionLength: realData[0].sessionLength, // value de 1er session
    };
    const fakeDataEnd = {
        date: "",
        sessionLength: realData[realData.length - 1].sessionLength, // value de dernière session
    };

    const data = [fakeDataStart, ...realData, fakeDataEnd];

    return (
        <ResponsiveContainer width="100%" height={containerHeight}>
            <ComposedChart
                width={800}
                height={800}
                data={data}
                margin={{
                    top: 0,
                    right: -20,
                    bottom: 20,
                    left: -20,
                }}
                style={{
                    backgroundColor: "#FF0101",
                    color: "white",
                }}
                onMouseMove={(e) => {
                    if (e && e.activeTooltipIndex !== undefined) {
                        setActiveIndex(e.activeTooltipIndex);
                    }
                }}
            >
                <CartesianGrid stroke="none" />
                <XAxis
                    dataKey="date"
                    padding={{ left: 0, right: 0, top: 0 }}
                    style={{
                        stroke: "none",
                    }}
                    tick={{ fill: "#FFFFFF", opacity: 0.5 }} // opacité des dates
                />
                <Tooltip
                    cursor={<CustomCursor height={300} />}
                    contentStyle={{
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "none",
                    }}
                    labelStyle={{
                        display: "none", // masque le label contenant la date
                    }}
                    itemStyle={{
                        color: "#000",
                    }}
                    formatter={(value) => [`${value} min`]}
                />
                <legend formatter={(value) => ` ${value} min`} />
                <Line
                    type="natural"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    data={data}
                    dataKey="sessionLength"
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
                <text x={50} y={50} fill="#fff" opacity="0.504" fontSize={16}>
                    <tspan x={50} dy="0">
                        Durée moyenne des
                    </tspan>
                    <tspan x={50} dy="20">
                        sessions
                    </tspan>
                </text>
            </ComposedChart>
        </ResponsiveContainer>
    );
};
export default LineChartComponent;
