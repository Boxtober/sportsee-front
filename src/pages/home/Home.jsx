import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import RadarChartComponent from "../../components/radarChart/RadarChart";
import LineChartComponent from "../../components/LineChart/LineChart";
import PieChartComponent from "../../components/pieChart/PieChart";
import BarChartComponent from "../../components/BarChart/BarChart";
import { Nutritions } from "../../components/cardsNutrition/CardsNutrition";
import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../services/apiService";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const [data, setData] = useState({
    userMainData: null,
    userActivity: null,
    userAverageSessions: null,
    userPerformance: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setError(null);

      try {
        const results = await Promise.all([
          getUserMainData(userId),
          getUserActivity(userId),
          getUserAverageSessions(userId),
          getUserPerformance(userId),
        ]);

        const [
          userMainData,
          userActivity,
          userAverageSessions,
          userPerformance,
        ] = results;

        setData({
          userMainData,
          userActivity,
          userAverageSessions,
          userPerformance,
        });
      } catch (err) {
        console.error("pas de datas :( ", err);
        setError("pas de datas :(");
      }
    };
    if (userId) {
      fetchAllData();
    } else {
      setError("Aucun utilisateur");
    }
  }, [userId]);

  if (error) {
    return (
      <div className="main">
        <Navbar />
        <div className="main-container">
          <SideBar />
          <div className="user-link-container">
            <div className="error-message">{error}</div>

            <Link to="/user/12" className="user-link">
              Karl
            </Link>
            <Link to="/user/18" className="user-link">
              Cecilia
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <Navbar />
      <div className="main-container">
        <SideBar />
        <div className="user-section">
          <Banner userData={data.userMainData} />
          <BarChartComponent userData={data.userActivity} />
          <div className="row">
            <LineChartComponent userData={data.userAverageSessions} />
            <RadarChartComponent userData={data.userPerformance} />
            <PieChartComponent userData={data.userMainData} />
          </div>
        </div>
        <Nutritions userData={data.userMainData} />
      </div>
    </div>
  );
};

export default Home;
