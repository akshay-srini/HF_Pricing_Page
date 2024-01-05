import { IoIosArrowForward } from "react-icons/io";

export default function Moreporducts() {
    return (
        <section className="more-products-section">
            <h2 className="more-products-title">More From HappyFox</h2>
            <div className="more-products-container-spacing">
                <div className="container-box spacing-in-box">
                    <img src="https://assets.www.happyfox.com/v2/images/pricing-lc.svg" alt="" className="more-products-img"/>
                    <h3 className="more-products-name">Live Chat</h3>
                    <p className="more-products-details">Chat with your customers instantly on mobile, desktop, and web.</p>
                    <div className="demo-btn">
                        <a href="" style={{fontWeight: '800'}}>Get a Demo</a>
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div>
                <div className="container-box spacing-in-box">
                    <img src="https://assets.www.happyfox.com/v2/images/pricing-cb.svg" alt="" className="more-products-img"/>
                    <h3 className="more-products-name">Chatbot</h3>
                    <p className="more-products-details">Engage and reach your customers 24x7 with ready-to-go chatbots.</p>
                    <div className="demo-btn">
                        <a href="">Get a demo</a>
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div><div className="container-box spacing-in-box">
                    <img src="https://assets.www.happyfox.com/v2/images/pricing-ai.svg" alt="" className="more-products-img"/>
                    <h3 className="more-products-name">Assist AI</h3>
                    <p className="more-products-details">Provide IT support directly from Slack and Microsoft Teams.</p>
                    <div className="demo-btn">
                        <a href="">Get a demo</a>
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div><div className="container-box spacing-in-box">
                    <img src="https://assets.www.happyfox.com/v2/images/pricing-bi.svg" alt="" className="more-products-img"/>
                    <h3 className="more-products-name">Business Intelligence</h3>
                    <p className="more-products-details">Turn insight into advantage with cross-functional reports & dashboards.</p>
                    <div className="demo-btn">
                        <a href="">Get a demo</a>
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div><div className="container-box spacing-in-box">
                    <img src="https://assets.www.happyfox.com/v2/images/pricing-wa.svg" alt="" className="more-products-img"/>
                    <h3 className="more-products-name">Workflow Automation</h3>
                    <p className="more-products-details">Reduce the grunt work with end-to-end process automation.</p>
                    <div className="demo-btn">
                        <a href="">Get a demo</a>
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div>
            </div>
        </section>
    );
}