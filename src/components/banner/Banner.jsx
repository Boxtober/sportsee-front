const Banner = ({ userData }) => {
    if (!userData) return null;

    return (
        <div className="banner">
            <h1>Bienvenue, {userData.userInfos.firstName} !</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <p>
                Score du jour :{" "}
                {userData.todayScore * 100 || userData.score * 100}%
            </p>
        </div>
    );
};

export default Banner;

// import React, { useEffect, useState } from "react";
// import mockData from "../../mocks/mocksData";
// import "./banner.scss";

// const Banner = () => {
//     const [userData, setUserData] = useState(null);
//     const [userActivity, setUserActivity] = useState(null);

//     useEffect(() => {
//         const mockUserData = getMockUserData();
//         const mockUserActivity = getMockUserActivity();

//         setUserData(mockUserData);
//         setUserActivity(mockUserActivity);
//     }, []);

//     if (!userData || !userActivity) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="banner">
//             <h1>
//                 Bonjour{" "}
//                 <b className="user-name">{userData.userInfos.firstName}</b>
//             </h1>
//             <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
//         </div>
//     );
// };

// export default Banner;
