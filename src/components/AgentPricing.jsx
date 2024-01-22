import "../App.css";
import {useState, useEffect} from "react";
import PricingData from "../Data/PricingData.json";
import {VscCircleSmall} from "react-icons/vsc";
import {IoIosArrowForward} from "react-icons/io";
import {LuPlus} from "react-icons/lu";

export default function AgentPricing({pricing}) {
  const [agentcategory, setagentCategory] = useState(0);
  const [unlimitedcategory, setUnlimitedCategory] = useState(0);
  const [data, setData] = useState([]);

  const PricingMethod = PricingData.pricing[pricing]["pricing-details"];
  const PricingCardDetails =
    PricingData.pricing[pricing]["pricing-details"][agentcategory][
      "pricing-types"
    ];

  // console.log(PricingCardDetails);
  // console.log(PricingData.pricing[0]["pricing-details"][0]["pricing-types"]);

  // console.log(Object.keys(PricingCardDetails));

  const handleAgentOptionClick = (option) => {
    console.log("agent", option);
    setagentCategory(option);
  };

  const handleUnlimitedOptionClick = (option) => {
    console.log("unlimited", option);
    setUnlimitedCategory(option);
  };

  useEffect(() => {
    setData(PricingData.pricing);
  }, []);

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {PricingMethod.map((element, index) =>
          pricing === 0 ? (
            <button
              key={index}
              className={`diff-types ${
                agentcategory === index && `types-active`
              }`}
              onClick={() => handleAgentOptionClick(index)}
            >
              {element["pricing-method"]}
            </button>
          ) : (
            <button
              key={index}
              className={`diff-types ${
                unlimitedcategory === index && `types-active`
              }`}
              onClick={() => handleUnlimitedOptionClick(index)}
            >
              {element["pricing-method"]}
            </button>
          )
        )}
      </div>
      <div className="types-container">
        {Object.keys(PricingCardDetails).map((element, index) => (
          <div className="container-box">
            <div className="type-name" key={index}>
              {element}
            </div>
            {PricingCardDetails[element].map((detail, detailIndex) => (
              <>
                <div className="type-details" key={detailIndex}>
                  <div className="dollar">$</div>
                  <div className="number">{detail.amount}</div>
                  per agent/mo
                </div>
                {detail.savings > 0 && (
                  <div className="type-savings">{detail.savings}% savings*</div>
                )}
                <div className="line"></div>

                <div className="details-container">
                  {detail["description-points"].map((point, pointIndex) => (
                    <div className="details-points">
                      <VscCircleSmall className="bullet-points" />
                      {point}
                    </div>
                  ))}
                </div>
              </>
            ))}
            <button className="types-button">
              Get a Demo <IoIosArrowForward />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
