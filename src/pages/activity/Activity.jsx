import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import { Nutritions } from "../../components/cardsNutrition/CardsNutrition";
import "./activity.scss";
import { getUserMainData, getUserActivity } from "../../services/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarChartComponent from "../../components/BarChart/BarChart";
import Error from "../error/Error";

const Activity = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const [data, setData] = useState({
    userMainData: null,
    userActivity: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      setError(null);
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

  if (error || !data.userMainData) {
    return <Error />;
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
          </div>
          <Nutritions userData={data.userMainData} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
