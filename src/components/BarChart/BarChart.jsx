import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import "./barChart.scss";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    backgroundColor: "#ff0000",
                    padding: 6,
                    color: "#fff",
                }}
            >
                <br></br>
                <p>{` ${payload[0].value} kg`}</p>
                <br></br>
                <p>{`${payload[1].value} kcal`}</p>
                <br></br>
            </div>
        );
    }
    return null;
};

const BarChartComponent = ({ userData }) => {
    if (!userData || !userData.sessions) {
        return null;
    }

    const data = userData.sessions.map((session, index) => ({
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
    }));

    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="barChartContainer"
        >
            <BarChart
                data={data}
                margin={{ top: 50, right: 90, left: 0, bottom: 40 }}
                barSize={7}
                barGap={8}
                style={{
                    backgroundColor: "#FBFBFB",
                }}
            >
                <text
                    x="12%"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                        fontSize: "16px",
                        fill: "#000000",
                    }}
                >
                    Activité quotidienne
                </text>

                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#ccc"
                    vertical={false}
                />
                <XAxis
                    padding={{ left: 10, right: 10 }}
                    dataKey="day"
                    type="number"
                    domain={["dataMin", "dataMax"]}
                    tickCount={data.length} // limite nbr de ticks
                    axisLine={{
                        stroke: "#dedede", // Couleur noire
                        strokeWidth: 2, // épaisseur de la ligne
                        opacity: 1, // opacité 100%
                    }}
                    tick={{ fill: "#9B9EAC", fontSize: 14, dy: 20 }}
                />

                <YAxis
                    domain={["dataMin - 10", "dataMax + 10"]} // arrondir au 10e sup / inf (mathfloor)
                    yAxisId="kilogram"
                    orientation="right"
                    tick={{ fill: "#9B9EAC", fontSize: 14 }}
                    axisLine={false} // masquer la ligne de l'axe Y à droite
                    dx={40} // deplacer l'axe vers la gauche
                    padding={{ left: 50, right: 90 }}
                />

                <YAxis
                    yAxisId="calories"
                    orientation="left"
                    tick={false}
                    axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    align="right"
                    verticalAlign="top"
                    iconType="circle"
                    wrapperStyle={{ paddingBottom: 40 }}
                    formatter={(value) => (
                        <span style={{ color: "#74798C" }}>{value}</span>
                    )}
                />

                <Bar
                    radius={[10, 10, 0, 0]}
                    yAxisId="kilogram"
                    dataKey="kilogram"
                    fill="#000"
                    name="Poids (kg)"
                />
                <Bar
                    radius={[10, 10, 0, 0]}
                    yAxisId="calories"
                    dataKey="calories"
                    fill="#ff0000"
                    name="Calories brûlées (kCal)"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
