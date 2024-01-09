import '../App.css';
import { useState } from 'react';
import { VscCircleSmall } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

export default function AgentPricing(props) {
    const [agentcategory, setagentCategory] = useState('monthly');
    const [unlimitedcategory, setUnlimitedCategory] = useState('annual');

    const handleAgentOptionClick = (option) => {
        console.log(option)
        setagentCategory(option);
    }
    const handleUnlimitedOptionClick = (option) => {
        console.log(option)
        setUnlimitedCategory(option);
    }
    const getAmount = () => {
        if(props.pricing === 'agent' && agentcategory === 'monthly') {
            return {
                mighty: 39,
                fantastic: 59,
                enterprise: 79, 
                enterprisePlus: 99,
                mightySavings: 0,
                fantasticSavings: 0,
                enterpriseSavings: 0,
                enterprisePlusSavings: 0

            }
        } 
        else if(props.pricing === 'agent' && agentcategory === 'annual') {
            return {
                mighty: 29,
                mightySavings: 25,
                fantastic: 49,
                fantasticSavings: 16,
                enterprise: 69,
                enterpriseSavings: 12,
                enterprisePlus: 89,
                enterprisePlusSavings: 10
            }
        }
        else if(props.pricing === 'agent' && agentcategory === '2-year') {
            return {
                mighty: 26,
                mightySavings: 33,
                fantastic: 39,
                fantasticSavings: 34,   
                enterprise: 52,
                enterpriseSavings: 34,
                enterprisePlus: 64,
                enterprisePlusSavings: 35
            }
        }
        else if(props.pricing === 'agent' && agentcategory === '3-year') {
            return {
                mighty: 27,
                fantastic: 41,
                enterprise: 55,
                enterprisePlus: 69,
                mightySavings: 30,
                fantasticSavings: 30,
                enterpriseSavings: 30,
                enterprisePlusSavings: 30


            }
        }
        else if(props.pricing === 'unlimited' && unlimitedcategory === 'annual') {
            return {
                mighty: '1,499',
                fantastic: '1,999',
                enterprise: '2,999',
                enterprisePlus: '4,999',
                mightySavings: 0,
                fantasticSavings: 0,
                enterpriseSavings: 0,
                enterprisePlusSavings: 0

            }
        }
        else if(props.pricing === 'unlimited' && unlimitedcategory === '2-year') {
            return {
                mighty: '1,149',
                mightySavings: 23,
                fantastic: '1,599',
                fantasticSavings: 20,
                enterprise: '2,399',
                enterpriseSavings: 20,
                enterprisePlus: '3,999',
                enterprisePlusSavings: 20
            }
        }
        else if(props.pricing === 'unlimited' && unlimitedcategory === '3-year') {
            return {
                mighty: '1,299',
                fantastic: '1,729',
                enterprise: '2,609',
                enterprisePlus: '4,329',
                mightySavings: 13,
                fantasticSavings: 13,
                enterpriseSavings: 13,
                enterprisePlusSavings: 13

            }
        }
    };
    const { mighty, fantastic, enterprise, enterprisePlus, mightySavings, fantasticSavings, enterpriseSavings, enterprisePlusSavings } = getAmount();
    

    return (
    <section className='pricing-section'>
        { props.pricing === 'agent' && 

            <div className='pricing-container'>
            
            <button className= {`diff-types ${agentcategory === 'monthly' && `types-active`}`} onClick={() => handleAgentOptionClick('monthly')}>Monthly</button>
            <button className= {`diff-types ${agentcategory === 'annual' && `types-active`}`} onClick={() => handleAgentOptionClick('annual')}>Annual</button>
            <button className= {`diff-types ${agentcategory === '2-year' && `types-active`}`} onClick={() => handleAgentOptionClick('2-year')}>2 - Year Saving plan<br></br><span>Paid Up-front</span></button>
            <button className= {`diff-types ${agentcategory === '3-year' && `types-active`}`} onClick={() => handleAgentOptionClick('3-year')}> 3 - Year Contract<br></br><span>Billed Annually</span></button>
        </div>
        }

        { props.pricing === 'unlimited' && 

        <div className='pricing-container'>
        <button className= {`diff-types ${unlimitedcategory === 'annual' && `types-active`}`} onClick={() => handleUnlimitedOptionClick('annual')}>Annual</button>
        <button className= {`diff-types ${unlimitedcategory === '2-year' && `types-active`}`} onClick={() => handleUnlimitedOptionClick('2-year')}>2 - Year Saving plan<br></br><span>Paid Up-front</span></button>
        <button className= {`diff-types ${unlimitedcategory === '3-year' && `types-active`}`} onClick={() => handleUnlimitedOptionClick('3-year')}> 3 - Year Contract<br></br><span>Billed Annually</span></button>
        </div>
        }




        
        <div className='types-container'>
            <div className="container-box">
                {props.pricing === "agent" ? <div className='type-name'>Mighty</div> : <div className='type-name'>Starter</div>}
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>{mighty}</div>
                    per agent/mo
                </div>
                {mightySavings > 0 && <div className="type-savings">{mightySavings}% savings*</div>}
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
            {props.pricing === "agent" ? <div className='type-name'>Fantastic</div> : <div className='type-name'>Growth</div>}
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>{fantastic}</div>
                    per agent/mo
                </div>
               {fantasticSavings > 0 && <div className="type-savings">{fantasticSavings}% savings*</div>}
                <div className='line'></div>
            <div className='details-container'>
                <div className='details-points main-point'><LuPlus className='plus-points' /> Everything in Mighty</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Multi-brand helpdesk</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Knowledge Base</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSO (GSuite/SAML/Azure)</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />SSL Certificate Hosting</div>
                <div className='details-points'><VscCircleSmall className='bullet-points' />Migration Assistance</div>
            </div>
            
            <button className='types-button'>Get a Demo <IoIosArrowForward className='arrow' /></button>
            </div>
            
            <div className="container-box">
                <p className='most-popular'>Most Popular</p>
                {props.pricing === "agent" ? <div className='type-name'>Enterprise</div> : <div className='type-name'>Scale</div>}
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>{enterprise}</div>
                    per agent/mo
                </div>
                {enterpriseSavings > 0 && <div className="type-savings">{enterpriseSavings}% savings*</div>}
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
            {props.pricing === "agent" ? <div className='type-name'>Enterprise Plus</div> : <div className='type-name'>Scale Plus</div>}
                <div className="type-details">
                    <div className='dollar'>$</div>
                    <div className='number'>{enterprisePlus}</div>
                    per agent/mo
                </div>
                {enterprisePlusSavings > 0 && <div className="type-savings">{enterprisePlusSavings}% savings*</div>}
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
  