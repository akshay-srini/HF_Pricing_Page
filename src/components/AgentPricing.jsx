import '../App.css';

import { VscCircleSmall } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

export default function AgentPricing() {
    
    return (
    <section className='pricing-section'>
        <div className='pricing-container'>
            
            <button className="diff-types">Monthly</button>
            <button className="diff-types">Annual</button>
            <button className="diff-types">2 - Year Saving plan<br></br><span>Paid Up-front</span></button>
            <button className='diff-types'> 3 - Year Contract<br></br><span>Billed Annually</span></button>
        </div>
        
        <div className='types-container'>
            <div className="container-box">
                <div className='type-name'>Mighty</div>
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>26</div>
                    per agent/mo
                </div>
                <div className="type-savings">33% savings*</div>
                <div className='line'></div>
            <div className='details-container'>
                <div className='details-points'><VscCircleSmall className='bullet-points'/>Omnichannel Ticket Creation</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SLA Management</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Knowledge Base</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSO (GSuite/SAML/Azure)</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSL Certificate Hosting</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Migration Assistance</div>
            </div>
            
            <button className='types-button'>Get a Demo <IoIosArrowForward className='arrow' /></button>
            </div>
            <div className="container-box">
                <div className='type-name'>Fantastic</div>
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>39</div>
                    per agent/mo
                </div>
                <div className="type-savings">34% savings*</div>
                <div className='line'></div>
            <div className='details-container'>
                <div className='details-points main-point'><LuPlus className='plus-points' /> Everything in Mighty</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SLA Management</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Knowledge Base</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSO (GSuite/SAML/Azure)</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSL Certificate Hosting</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Migration Assistance</div>
            </div>
            
            <button className='types-button'>Get a Demo <IoIosArrowForward className='arrow' /></button>
            </div>
            
            <div className="container-box">
                <p className='most-popular'>Most Popular</p>
                <div className='type-name'>Enterprise</div>
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>52</div>
                    per agent/mo
                </div>
                <div className="type-savings">34% savings*</div>
                <div className='line'></div>
            <div className='details-container'>
            <div className='details-points main-point'><LuPlus className='plus-points' /> Everything in Fantastic</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SLA Management</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Knowledge Base</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSO (GSuite/SAML/Azure)</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSL Certificate Hosting</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Migration Assistance</div>
            </div>
            
            <button className='types-button'>Get a Demo <IoIosArrowForward className='arrow' /></button>
            </div><div className="container-box">
                <div className='type-name'>Enterprise Plus</div>
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>64</div>
                    per agent/mo
                </div>
                <div className="type-savings">35% savings*</div>
                <div className='line'></div>
            <div className='details-container'>
            <div className='details-points main-point'><LuPlus className='plus-points' /> Everything in Exterpirse</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SLA Management</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Knowledge Base</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSO (GSuite/SAML/Azure)</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSL Certificate Hosting</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Migration Assistance</div>
            </div>
            
            <button className='types-button'>Get a Demo <IoIosArrowForward className='arrow' /></button>
            </div>
        </div>
        <div className='imp-note'>
            <p>All plans require a minimum of 5 help desk agents. Non-profit and educational organizations are eligible for a discount.</p>
        </div>
        
    </section>
    );
  }
  