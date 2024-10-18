import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " You share your logistics requirements with us.",
      id: 1,
    },
    {
      text: " We assess and plan your shipping needs.",
      id: 2,
    },
    {
      text: " We coordinate the logistics for efficient transportation..",
      id: 3,
    },
    {
      text: " We execute and monitor your shipments.",
      id: 4,
    },
    {
      text: " You experience seamless logistics and enjoy the benefits of efficient cargo solutions.",
      id: 5,
    },
  ];

  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>How We Work</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
