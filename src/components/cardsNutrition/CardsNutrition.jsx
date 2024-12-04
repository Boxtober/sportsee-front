import React from "react";
import { Calorie, Protein, Carbohydrate, Lipid } from "../../assets/icons";
import "./cardsNutrition.scss";

export const Nutritions = ({ userData }) => {
    if (!userData || !userData.keyData) {
        return <p>...</p>;
    }

    // datas extraites de userData
    const nutritions = [
        {
            label: "Calories",
            value: userData.keyData.calorieCount ?? "indisponible", // absence de données
            icon: <Calorie />,
        },
        {
            label: "Proteins",
            value: userData.keyData.proteinCount ?? "indisponible",
            icon: <Protein />,
        },
        {
            label: "Carbs",
            value: userData.keyData.carbohydrateCount ?? "indisponible",
            icon: <Carbohydrate />,
        },
        {
            label: "Lipids",
            value: userData.keyData.lipidCount ?? "indisponible",
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

// CardsNutrition affiche chaque donnée nutritionnelle
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
