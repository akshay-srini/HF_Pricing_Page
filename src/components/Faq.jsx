import { FaAngleDown } from "react-icons/fa6";

export default function Faq() {
    
    return (
        <section className="faq-section">
            <div className="faq-container active">
                <h3>Frequently Asked Questions</h3>

            <ul className="whole-question-container">
                <li className="accordian-container">
                    <label htmlFor="first" className="question-container">Who are help desk agents?<FaAngleDown /></label>
                    <input type="checkbox" name="accordian" id="first" />
                    <div className="content">
                        <p className="answer-text">Support agents (help desk staff) who will be actively managing and responding to tickets raised by contacts.</p>
                    </div>  
                </li>
                <hr className="horizontal-line"/>
                <li className="accordian-container">
                    <label htmlFor="second" className="question-container">Who are categories?<FaAngleDown /></label>
                    <input type="checkbox" name="accordian" id="second" />
                    <div className="content">
                        <p className="answer-text">Categories allow you to separate incoming requests into dedicated ticket types that can be distributed to a specific team, have unique SLA requirements, and produce insightful metrics.</p>
                    </div>  
                </li>
                <hr className="horizontal-line"/>
                <li className="accordian-container">
                    <label htmlFor="third" className="question-container">How can I change my plan?<FaAngleDown /></label>
                    <input type="checkbox" name="accordian" id="third" />
                    <div className="content">
                        <p className="answer-text">You can upgrade your plan at any point in time. However, if you want to downgrade, you can do it at the end of the current billing cycle. You may also write to billing@happyfox.com or contact your Account Executive.</p>
                    </div>  
                </li>
                <hr className="horizontal-line"/>
                <li className="accordian-container">
                    <label htmlFor="fourth" className="question-container">Do you offer a trail?<FaAngleDown /></label>
                    <input type="checkbox" name="accordian" id="fourth" />
                    <div className="content">
                        <p className="answer-text">Yes. We encourage you to request a demo to determine if HappyFox Help Desk is the right fit for your organization. Once we identify your needs, we'd be happy to provide access to a trial account where you can configure your proof of concept.</p>
                    </div>  
                </li>
                <hr className="horizontal-line"/>
                <li className="accordian-container">
                    <label htmlFor="fourth" className="question-container">Do you offer discounts for non-profits or educational institutes?<FaAngleDown /></label>
                    <input type="checkbox" name="accordian" id="fourth" />
                    <div className="content">
                        <p className="answer-text">We offer a 10% discount on annual subscriptions on any plan.</p>
                    </div>  
                </li>
                <hr className="horizontal-line"/>
                <li className="accordian-container">
                    <label htmlFor="fourth" className="question-container">What are the available billing cycles?<FaAngleDown /></label>
                    <input type="checkbox" name="accordian" id="fourth" />
                    <div className="content">
                        <p className="answer-text">We offer a monthly, annual, 2-year savings plan (paid upfront), and 3-year contract for agent-based pricing.</p>
                    </div>  
                </li>
                <hr className="horizontal-line"/>
            </ul>                
            </div>
            
        </section>
    );
}