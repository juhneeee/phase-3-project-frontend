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
            <tr>
                <th onClick={e => setSortBy('label')}>Symbol</th>
                <th onClick={e => setSortBy('name')}>Name</th>
                {/* <th onClick={e => setSortBy('Open')}>Opening Price</th> */}
                <th onClick={e => setSortBy('price')}>Price</th>
                {/* <th onClick={e => setSortBy('Change')}>Change</th> */}
            </tr>

            {stocksToDisplay.map ((stock, i) =>{
                return <StockItem key={stock.label} stockData={stock} setSelectedStock={setSelectedStock}/>
            })} 
    </table>
    </>
}

export default StockList