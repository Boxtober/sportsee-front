import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Banner from "../../components/banner/Banner";
import RadarChartComponent from "../../components/radarChart/RadarChart";
import { Nutritions } from "../../components/cardsNutrition/CardsNutrition";
import "./home.scss";

const Home = () => {
    return (
        <div className="main">
            <div>
                <Navbar />
                <div className="main-container">
                    <SideBar />
                    <div className="user-section">
                        <Banner />
                        <Nutritions />
                        <RadarChartComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
