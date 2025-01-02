import "./banner.scss";
const Banner = ({ userData }) => {
    if (!userData) return null;

    return (
        <div className="banner">
            <h1>
                Bonjour
                <span className="red"> {userData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            {/* <p>
                Score :
                {userData.todayScore * 100 || userData.score * 100}%
            </p> */}
        </div>
    );
};

export default Banner;
