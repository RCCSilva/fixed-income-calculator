import React from 'react';

const headerClass = 'w-1/12 text-sm text-gray-200 text-center font-bold';

const InvestmentHeader = () => {
    return (
        <div className='flex items-center justify-around w-full bg-teal-700 py-4 rounded'>
            <div className={headerClass}>
                Nome
            </div>
            <div className={headerClass}>
                Vencimento
            </div>
            <div className={headerClass}>
                Tipo
            </div>
            <div className={headerClass}>
                Multiplicar
            </div>
            <div className={headerClass}>
                Adicionar (% anual)
            </div>
            <div className={headerClass}>
                Imposto
            </div>
            <div className={headerClass}>
                Taxa de Imposto
            </div>
            <div className={headerClass}>
                Valorização Anual (% anual)
            </div>
            <div className={headerClass}>
                Valorização Bruta
            </div>
            <div className={headerClass}>
                Valorização Líquida
            </div>
            <div className={headerClass}>
                Inflação Acumulada
            </div>
            <div className={headerClass}>
                Deletar
            </div>
        </div>
    )
}

export default InvestmentHeader;