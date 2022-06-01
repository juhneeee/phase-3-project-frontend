import React, {useEffect, useState} from 'react'
import StockItem from './StockItem';

function StockList () {
    //loads stocks
    const [stocks, setStocks] = useState([])
    const [sortBy, setSortBy] = useState('Symbol')


    useEffect(() => {
        fetch("http://localhost:9292/stocks")
          .then((r) => r.json())
          .then(setStocks)
    }, []);

    let stocksToDisplay = stocks.sort((a, b)=> a[sortBy] > b[sortBy] ? -1 : 1) 
    

    return <>
    <table className='table'>
        <tbody>
            <tr>
                <th onClick={e => setSortBy('Symbol')}>Symbol</th>

                <th onClick={e => setSortBy('Name')}>Name</th>

                <th onClick={e => setSortBy('Open')}>Opening Price</th>

                <th onClick={e => setSortBy('Price')}>Price</th>

                <th onClick={e => setSortBy('Change')}>Change</th>
            </tr>

            {stocksToDisplay.map ((stock, i) =>{
                return <StockItem key={stock.label} stockData={stock}/>
            })}
        </tbody>
    </table>
    </>
}

export default StockList