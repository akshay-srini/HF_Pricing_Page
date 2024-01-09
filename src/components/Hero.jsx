import '../App.css';
import {useState} from 'react';
import AgentPricing from './AgentPricing';

export default function Hero() {
    const [pricing, setPricing] = useState('agent');
    const handleOptionClick = (option) => {
        console.log(option);
        setPricing(option);
      };
      
    return (
        <>
    <section className='hero-section'>
        <h1 className='hero-title'>Plans & Pricing</h1>
        <ul className='category-container'>
            <li className= {`category-box ${pricing == 'agent' && `box-active`}`} onClick={() => handleOptionClick('agent')}>
                <a href="#">Agent-based pricing</a>
            </li>
            <li className= {`category-box ${pricing == 'unlimited' && `box-active`}`} onClick={() => handleOptionClick('unlimited')}>
                <a href="#">Unlimited Agents</a>
            </li>
        </ul>
    </section>
    <AgentPricing pricing={pricing} />
    </>
    );
  }
  