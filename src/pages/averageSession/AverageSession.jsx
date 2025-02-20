import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import {
  getUserMainData,
  getUserAverageSessions,
} from "../../services/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChartComponent from "../../components/LineChart/LineChart";

const AverageSessions = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const [data, setData] = useState({
    userMainData: null,
    userAverageSessions: null,
  });

  useEffect(() => {
    const fetchAverageSessionsData = async () => {
      try {
        const userMainData = await getUserMainData(userId);
        const userAverageSessions = await getUserAverageSessions(userId);

        setData({
          userMainData,
          userAverageSessions,
        });
      } catch (error) {
        console.error("pas de datas :( ");
      }
    };
    fetchAverageSessionsData();
  }, [userId]);

  return (
    <div className="main">
      <div>
        <Navbar />
        <div className="main-container">
          <SideBar />
          <div className="user-section">
            <Banner userData={data.userMainData} />

            <LineChartComponent userData={data.userAverageSessions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageSessions;
