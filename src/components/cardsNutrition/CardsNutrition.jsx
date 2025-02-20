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
      value: userData.keyData.calorieCount
        ? `${userData.keyData.calorieCount}kCal`
        : "indisponible",
      icon: <Calorie />,
    },
    {
      label: "Proteines",
      value: userData.keyData.proteinCount
        ? `${userData.keyData.proteinCount}g`
        : "indisponible",
      icon: <Protein />,
    },
    {
      label: "Glucides",
      value: userData.keyData.carbohydrateCount
        ? `${userData.keyData.carbohydrateCount}g`
        : "indisponible",
      icon: <Carbohydrate />,
    },
    {
      label: "Lipides",
      value: userData.keyData.lipidCount
        ? `${userData.keyData.lipidCount}g`
        : "indisponible",
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
