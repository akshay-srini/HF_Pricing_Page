import { VscCircleSmall } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";


export default function PricingOptions({ typeName, number, savings, details, buttonText }) {
    return (
        <div className="container-box">
            <div className="type-name">{typeName}</div>
            <div className="type-details">
                <div className="dollar">$</div>
                <div className="number">{number}</div>
                per agent/mo
            </div>
            {savings === 0 ? <></> : <div className="type-savings">{savings}% savings*</div>}
            <div className="line"></div>
            <div className="details-container">
                {details.map((point, index) => (
                    <div key={index} className="details-points">
                        <VscCircleSmall className="bullet-points" />
                        {point}
                    </div>
                ))}
            </div>
            <button className="types-button">
                {buttonText} <IoIosArrowForward className="arrow" />
            </button>
        </div>
        );
        }