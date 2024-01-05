
import { FaAngleDown } from "react-icons/fa6";

export default function Faq() {
    return (
        <section className="faq-section">
            <div className="faq-container active">
                <h3>Frequently Asked Questions</h3>
                <div className="whole-ques-container">
                    <div className="question-container">
                        <p className="question-text">Who are help desk agents?</p>
                        <FaAngleDown />
                    </div>
                    <div className="answer-container border-bottom">
                        <p className="answer-text">Support agents (help desk staff) who will be actively managing and responding to tickets raised by contacts.</p>                    
                    </div>
                    <div className="question-container  border-bottom">
                        <p className="question-text">What are categories?</p>
                        <FaAngleDown />
                    </div>
                    <div className="question-container border-bottom">
                        <p className="question-text">How I change my plan?</p>
                        <FaAngleDown />
                    </div>
                    <div className="question-container border-bottom">
                        <p className="question-text">Do you offer a trial?</p>
                        <FaAngleDown />
                    </div>
                    <div className="question-container border-bottom">
                        <p className="question-text">Do you offer discounts for non-profits or educational institutes?</p>
                        <FaAngleDown />
                    </div>
                    <div className="question-container border-bottom">
                        <p className="question-text">What are the available billing cycles?</p>
                        <FaAngleDown />
                    </div>
                </div>
            </div>
            
        </section>
    );
}