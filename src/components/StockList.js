import React, {useEffect, useState} from 'react'
import StockItem from './StockItem';

function StockList ({stocks, setSelectedStock, updateStocks}) {
    //loads stocks
    const [sortBy, setSortBy] = useState('Symbol')

    useEffect(() => {
        updateStocks()
    }, []);

    let stocksToDisplay = stocks.sort((a, b)=> a[sortBy] > b[sortBy] ? 1 : -1) 
    

    return <>
    <table className='table'>
        <thead>
            <tr>
                <th onClick={e => setSortBy('label')}>Symbol</th>
                <th onClick={e => setSortBy('name')}>Name</th>
                <th onClick={e => setSortBy('previous')}>Previous</th>
                <th onClick={e => setSortBy('price')}>Current</th>
                <th >Change(%)</th>
            </tr>
        </thead>

            {stocksToDisplay.map ((stock, i) =>{
                return <StockItem key={stock.label} stockData={stock} setSelectedStock={setSelectedStock}/>
            })} 
    </table>
    </>
}

export default StockList