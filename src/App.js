import React, { useState } from 'react';
import './App.css';
import InvestmentCard from './components/InvestmentCard';
import InvestmentHeader from './components/InvestmentHeader';
import InvestmentForm from './components/InvestmentForm';
import NavBar from './components/NavBar';
import { getTaxRate } from './services/taxService'; 

const App = () => {
  const [ipca, setIpca] = useState(0);
  const [selic, setSelic] = useState(0);
  const [cdi, setCdi] = useState(0);
  const [showInvetmentForm, setShowInvetmentForm] = useState(false);
  const [inputInvestments, setInputInvestments] = useState([]);

  const getDays = (endDateString) => {

    const currentDate = new Date();
    const endDate = new Date(endDateString);

    const diffTime = Math.abs(endDate - currentDate);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return days
  }

  const getBaseAnnualRate = (type) => {
    if (type === 'IPCA') {
      return ipca;
    } else if (type === 'CDI') {
      return cdi;
    } else if (type === 'SELIC') {
      return selic;
    }
  }

  const addInvestment = (investment) => {
    setInputInvestments(inputInvestments.concat(investment));
  }

  const investmentFormView = () => {
    return (
      <InvestmentForm
        closeHandler={() => setShowInvetmentForm(false)}
        addInvestment={(investment) => addInvestment(investment)}/> 
    )
  }

  const removeInvestmentByIndex = (filterIndex) => {
    setInputInvestments(inputInvestments.filter((_, index) => index !== filterIndex));
  }

  const buildInvestmentCards = (investment, index) => {

    const days = getDays(investment.endDate);
    const taxRate = investment.hasTax ? getTaxRate(days) : 0;
    const annualRate = getBaseAnnualRate(investment.type);
    const calculatedAnnualRate = 
      (annualRate * investment.multiplier) + investment.adder;

    const grossProfitRate = ((1 + calculatedAnnualRate) ** (days / 365) - 1);
    
    const netProfitRate = grossProfitRate * (1 - taxRate);

    const inflationRate = ((1 + parseFloat(ipca)) ** (days / 365)) - 1;

    return (
      <InvestmentCard
       name={investment.name}
       endDate={investment.endDate}
       type={investment.type}
       multiplier={investment.multiplier}
       adder={investment.adder}
       hasTax={investment.hasTax}
       taxRate={taxRate}
       annualRate={calculatedAnnualRate}
       grossProfitRate={grossProfitRate}
       netProfitRate={netProfitRate}
       inflationRate={inflationRate}
       removeHandler={() => removeInvestmentByIndex(index)}/>
    )
  }


  return (
    <div className="App">
      <NavBar/>
      <div className='flex-col items-'>
        <form className='w-4/12 flex items-center mx-16 px-4 py-4 bg-white shadow-lg rounded ml-auto'>
          <label className='mx-1 font-bold'>
            SELIC:
            <input
             className='px-2 w-full border border-black rounded'
             type="number" 
             name="name" 
             value={selic} 
             onChange={(event) => setSelic(event.target.value)}/>
          </label>
          <label className='mx-1 font-bold'>
            CDI:
            <input
             className='px-2 w-full border border-black rounded'
             type="number" 
             name="name" 
             value={cdi} 
             onChange={(event) => setCdi(event.target.value)}/>
          </label>
          <label className='mx-1 font-bold'>
            IPCA:
            <input
             className='px-2 w-full border border-black rounded'
             type="number" 
             name="name" 
             value={ipca} 
             onChange={(event) => setIpca(event.target.value)}/>
          </label>
        </form>
        <div className='mt-8 px-16 flex justify-between'>
          <button 
            onClick={() => setShowInvetmentForm(true)}
            className='px-2 py-4 bg-green-400 text-gray-200 rounded-lg text-white font-bold'>
            Adicionar
          </button>
        </div>
        <div className='w-full px-4'>
          {showInvetmentForm ? investmentFormView() : ''}
          <div className='mt-4'>
            <div className='mb-2'>
              <InvestmentHeader/>
            </div>
            {inputInvestments.map(buildInvestmentCards)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
