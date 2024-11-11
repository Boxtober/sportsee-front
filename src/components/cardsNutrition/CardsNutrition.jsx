import React, { useEffect, useState } from "react";
import { getMockUserData, getMockUserActivity } from "../../mocks/UserProfile";
import "./cardsNutrition.scss";

import { Calorie, Protein, Carbohydrate, Lipid } from "../../assets/icons";

export const Nutritions = () => {
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

    const nutritions = [
        {
            label: "Calories",
            value: userData.keyData.calorieCount,
            icon: <Calorie />,
        },
        {
            label: "Proteins",
            value: userData.keyData.proteinCount,
            icon: <Protein />,
        },
        {
            label: "Carbs",
            value: userData.keyData.carbohydrateCount,
            icon: <Carbohydrate />,
        },
        {
            label: "Lipids",
            value: userData.keyData.lipidCount,
            icon: <Lipid />,
        },
    ];

    return (
        <div className="card-data-container">
            {nutritions.map((item, index) => (
                <CardsNutrition
                    key={index}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};

export const CardsNutrition = ({ label, value, icon }) => {
    const cardClass = label.toLowerCase();
    return (
        <div className={`card-data ${cardClass}`}>
            {icon}
            <div className="card-data-content">
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </div>
    );
};
