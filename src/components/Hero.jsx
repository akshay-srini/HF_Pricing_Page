import "../App.css";
import { useState } from "react";
import AgentPricing from "./AgentPricing";
import PricingData from "../Data/PricingData.json";
import react from "react";

export default function Hero() {
  const [pricing, setPricing] = useState(0);
  const handleOptionClick = (option) => {
    console.log("Agents",option);
    setPricing(option);
  };

  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title">Plans & Pricing</h1>
        <ul className="category-container">
          <li
            className={`category-box ${
              pricing === 0 && `box-active`
            }`}
            onClick={() => handleOptionClick(0)}
          >
            <a href="#">{PricingData.pricing[0]["pricing-plan-name"]}</a>
          </li>
          <li
            className={`category-box ${
              pricing === 1 && `box-active`
            }`}
            onClick={() => handleOptionClick(1)}
          >
            <a href="#">{PricingData.pricing[1]["pricing-plan-name"]}</a>
          </li>
        </ul>
      </section>
      <AgentPricing pricing={pricing} />
    </>
  );
}
