import React, {useEffect, useState} from 'react'
import StockItem from './StockItem';

function StockList ({stocks, setSelectedStock, updateStocks}) {
    //loads stocks
    const [sortBy, setSortBy] = useState('percent_change')

    useEffect(() => {
        updateStocks()
    }, []);
    
    let stocksToDisplay = stocks.sort((a, b)=> a[sortBy] > b[sortBy] ? 1 : -1)
    if (sortBy == 'percent_change'){
        stocksToDisplay.reverse()
    }

    return <div className="div-table">
        <h1>Stocks</h1>
    <table className='table'>
        <thead>
            <tr className="transactions">
                <th onClick={e => setSortBy('label')}>Symbol</th>
                <th onClick={e => setSortBy('name')}>Name</th>
                <th onClick={e => setSortBy('previous')}>Previous</th>
                <th onClick={e => setSortBy('price')}>Current</th>
                <th onClick={e => setSortBy('percent_change')}>Change(%)</th>
            </tr>
        </thead>
        <tbody>
            {stocksToDisplay.map ((stock, i) =>{
                return <StockItem key={stock.label} stockData={stock} setSelectedStock={setSelectedStock}/>
            })} 
            </tbody>
    </table>
    </div>
}

export default StockList