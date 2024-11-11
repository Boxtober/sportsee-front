import React, { useEffect, useState } from "react";
import { getMockUserData, getMockUserActivity } from "../../mocks/UserProfile";
import "./banner.scss";

const Banner = () => {
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);

    useEffect(() => {
        const mockUserData = getMockUserData();
        const mockUserActivity = getMockUserActivity();

        setUserData(mockUserData);
        setUserActivity(mockUserActivity);
    }, []);

    if (!userData || !userActivity) {
        return <div>Loading...</div>;
    }

    return (
        <div className="banner">
            <h1>
                Bonjour{" "}
                <b className="user-name">{userData.userInfos.firstName}</b>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Banner;
