import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
        Benefits of Professional Logistics Services
      </h2>
      <p>
        Global reach for your business <BsFillDoorOpenFill />
      </p>
      <p>
        Attract new customers with reliable service <FaPeopleCarry />
      </p>
      <p>
        Significantly reduced shipping costs <FaMoneyBillAlt />
      </p>
      <p>
        Flexible scheduling options <AiOutlineSchedule />
      </p>
      <p>
        Targeted marketing strategies with high conversion rates <AiOutlineRise />
      </p>
      <p>
        Streamlined processes through automation, leading to increased efficiency <FiRepeat />
      </p>
    </div>
  );
};


export default Benefits;
