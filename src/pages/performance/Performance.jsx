import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import { getUserMainData, getUserPerformance } from "../../services/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RadarChartComponent from "../../components/radarChart/RadarChart";
import Error from "../error/Error";

const Performance = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const [data, setData] = useState({
    userMainData: null,
    userPerformance: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      setError(null);
      try {
        const userMainData = await getUserMainData(userId);
        const userPerformance = await getUserPerformance(userId);

        setData({
          userMainData,
          userPerformance,
        });
      } catch (error) {
        console.error("pas de datas :( ");
        setError("pas de datas :(");
      }
    };
    fetchPerformanceData();
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
            <RadarChartComponent userData={data.userPerformance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
