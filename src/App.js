import react from 'react';
import './App.css';
import './css/Media.css';
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import AgentPricing from "./components/AgentPricing.jsx";
import Comparison from "./components/Comparison.jsx";
import Faq from './components/Faq.jsx';
import Moreporducts from './components/Moreproducts.jsx';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Hero />
      <AgentPricing />
      <Comparison />
      <Faq />
      <Moreporducts />
    </div>
  );
}

export default App;
