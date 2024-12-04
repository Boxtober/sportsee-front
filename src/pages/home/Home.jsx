import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import RadarChartComponent from "../../components/radarChart/RadarChart";
import { Nutritions } from "../../components/cardsNutrition/CardsNutrition";
import "./home.scss";
import LineChartComponent from "../../components/LineChart/LineChart";
import PieChartComponent from "../../components/pieChart/PieChart";
import BarChartComponent from "../../components/BarChart/BarChart";

import {
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from "../../services/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const { id } = useParams(); // récup id depuis url
    const userId = parseInt(id, 10); //formate en entier
    const [data, setData] = useState({
        userMainData: null,
        userActivity: null,
        userAverageSessions: null,
        userPerformance: null,
    });

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const userMainData = await getUserMainData(userId);
                const userActivity = await getUserActivity(userId);
                const userAverageSessions = await getUserAverageSessions(
                    userId
                );
                const userPerformance = await getUserPerformance(userId);
                console.log("ALL DATAS :", {
                    userMainData,
                    userActivity,
                    userAverageSessions,
                    userPerformance,
                });

                setData({
                    userMainData,
                    userActivity,
                    userAverageSessions,
                    userPerformance,
                });
            } catch (error) {
                console.error("pas de datas :( ");
            }
        };
        fetchAllData();
    }, [userId]);

    if (!userId) {
        return <p>eh naaaaan !</p>;
    }
    return (
        <div className="main">
            <div>
                <Navbar />
                <div className="main-container">
                    <SideBar />
                    <div className="user-section">
                        <Banner userData={data.userMainData} />
                        <BarChartComponent userData={data.userActivity} />
                        <div className="row">
                            <RadarChartComponent
                                userData={data.userPerformance}
                            />
                            <LineChartComponent
                                userData={data.userAverageSessions}
                            />
                            <PieChartComponent userData={data.userMainData} />
                        </div>
                    </div>
                    <Nutritions userData={data.userMainData} />
                </div>
            </div>
        </div>
    );
};

export default Home;
