import React from 'react';

const valueClass = 'w-1/12 text-lg text-center';

const toPercentage = (value) => {
    return (value * 100).toFixed(2)+"%";
}

const InvestmentCard = (props) => {
    return (
        <div className='flex items-center my-1 justify-around w-full bg-teal-300 py-4 rounded'>
            <div className={valueClass}>
                {props.name}
            </div>
            <div className={valueClass}>
                {props.endDate}
            </div>
            <div className={valueClass}>
                {props.type}
            </div>
            <div className={valueClass}>
                {toPercentage(props.multiplier)}
            </div>
            <div className={valueClass}>
                {toPercentage(props.adder)}
            </div>
            <div className={valueClass}>
                {props.hasTax ? 'Sim' : 'Não'}
            </div>
            <div className={valueClass}>
                {toPercentage(props.taxRate)}
            </div>
            <div className={valueClass}>
                {toPercentage(props.annualRate)}
            </div>
            <div className={valueClass}>
                {toPercentage(props.grossProfitRate)}
            </div>
            <div className={valueClass}>
                {toPercentage(props.netProfitRate)}
            </div>
            <div className={valueClass}>
                {toPercentage(props.inflationRate)}
            </div>
            <div className={valueClass}>
                <button
                    onClick={props.removeHandler} 
                    className='px-4 py-2 bg-red-500 rounded text-white'>
                    Deletar
                </button>
            </div>
        </div>
    )
} 

export default InvestmentCard;