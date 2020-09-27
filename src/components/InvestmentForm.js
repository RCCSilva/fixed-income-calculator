import React, { useState } from 'react';

const InvestmentForm = props => {
    const [name, setName] = useState('');
    const [endDate, setEndDate] = useState('');
    const [type, setType] = useState('');
    const [multiplier, setMultiplier] = useState(1.0);
    const [adder, setAdder] = useState(0);
    const [hasTax, setHasTax] = useState();
    
    const submitHandler = (event) => {
        event.preventDefault();
        const investment = {
            name: name,
            endDate: endDate,
            type: type,
            multiplier: multiplier,
            adder: adder,
            hasTax: hasTax === 'true'
        }
        props.addInvestment(investment);
        props.closeHandler()
    }

    return (
        <div 
            className='w-full h-screen top-0 left-0 absolute shadow-lg bg-white bg-opacity-75'>
            <form 
                onSubmit={(event) => submitHandler(event)} 
                className='mt-32 flex flex-col items-center w-3/12 mx-auto px-4 py-4 rounded-lg bg-blue-200'>
                <button 
                    onClick={props.closeHandler}
                    className='ml-auto text-xl font-bold'>
                    X
                </button>
                
                <label key='name' htmlFor='name' className='mt-2'> Nome:</label>
                <input
                 value={name}
                 onChange={(event) => setName(event.target.value)}
                 id='name' 
                 className='rounded' 
                 type='text'/>

                <label htmlFor='endDate' className='mt-2' key='vencimento'>Vencimento:</label>
                <input
                 value={endDate}
                 onChange={(event) => setEndDate(event.target.value)}
                 id='endDate' 
                 className='rounded' 
                 type='date'/>

                <label htmlFor='type' className='mt-2'>Tipo</label>
                <div 
                 id='type'
                 className='flex w-8/12 justify-around items-center'
                 onChange={(event) => setType(event.target.value)}>
                    <input type="radio" id="selic" name="type" value="SELIC"/>
                    <label htmlFor="selic">SELIC</label>
                    <input type="radio" id="cdi" name="type" value="CDI"/>
                    <label htmlFor="cdi">CDI</label>
                    <input type="radio" id="ipca" name="type" value="IPCA"/>
                    <label htmlFor="ipca">IPCA</label>
                </div>

                <label htmlFor='multplier' className='mt-2' key='multplier'>
                    Multiplicar:
                </label>
                <input 
                 id='multplier' 
                 className='rounded text-center w-3/12' 
                 type='number'
                 value={multiplier}
                 onChange={(event) => setMultiplier(parseFloat(event.target.value))}/>

                <label htmlFor='adder' className='mt-2' key='somar'>
                    Somar:
                </label>
                <input 
                 id='adder' 
                 className='rounded text-center w-3/12'
                 type='number' 
                 value={adder}
                 onChange={(event) => setAdder(parseFloat(event.target.value))}/>

                <label htmlFor='hasTax' className='mt-2'>Possui imposto de Renda?</label>
                <div 
                 id='hasTax'
                 className='flex justify-around items-center'
                 onChange={(event) => setHasTax(event.target.value)}>
                    <input type="radio" id="hasTax-true" name="hasTax" value="true"/>
                    <label htmlFor="hasTax-true">Sim</label>
                    <input type="radio" id="hasTax-false" name="hasTax" value="false"/>
                    <label htmlFor="hasTax-false">Não</label>
                </div>

                <input
                 className='mt-8 px-4 py-2 bg-green-500 rounded text-white'
                 type='submit' 
                 onSubmit={props.onSubmit} 
                 value='Criar'/>
            </form>
        </div>
    );
}

export default InvestmentForm;