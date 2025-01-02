import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import { Nutritions } from "../../components/cardsNutrition/CardsNutrition";
import "./activity.scss";
import { getUserMainData, getUserActivity } from "../../services/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PieChartComponent from "../../components/pieChart/PieChart";

const Activity = () => {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [data, setData] = useState({
        userMainData: null,
        userActivity: null,
    });

    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const userMainData = await getUserMainData(userId);
                const userActivity = await getUserActivity(userId);

                setData({
                    userMainData,
                    userActivity,
                });
            } catch (error) {
                console.error("pas de datas :( ");
            }
        };
        fetchActivityData();
    }, [userId]);

    return (
        <div className="main">
            <div>
                <Navbar />
                <div className="main-container">
                    <SideBar />
                    <div className="user-section">
                        <Banner userData={data.userMainData} />
                        <PieChartComponent userData={data.userMainData} />

                        <div className="row"></div>
                    </div>
                    <Nutritions userData={data.userMainData} />
                </div>
            </div>
        </div>
    );
};

export default Activity;
