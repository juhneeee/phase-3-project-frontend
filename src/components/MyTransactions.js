import React, {useEffect, useState} from 'react'
import TransactionItem from './TransactionItem';

function MyTransactions ({transactions, setSelectedStock, updateTransactions}) {
    //loads past transactions
    const [sortBy, setSortBy] = useState('Time')

    useEffect(() => {
        updateTransactions()
    }, []);

    let transactionsToDisplay = transactions.sort((a, b)=> a[sortBy] > b[sortBy] ? -1 : 1)
    if (sortBy=='label'){
        transactionsToDisplay = transactions.sort((a, b)=> a.stock.label > b.stock.label ? -1 : 1)
    }

    return <>
    <table className='table'>
        <tbody>
            <tr>
                <th ><h3 onClick={e => setSortBy('created_at')}>Time </h3> </th>

                <th ><h3 onClick={e => setSortBy('label')}>Symbol </h3> </th>

                <th ><h3 onClick={e => setSortBy('transaction_type')}>Type </h3> </th>

                <th ><h3 onClick={e => setSortBy('price')}>Price </h3> </th>

                <th ><h3 onClick={e => setSortBy('quantity')}>Quantity </h3> </th>

                <th ><h3 onClick={e => setSortBy('balance_change')}>Balance Change </h3> </th>
            </tr>

            {transactionsToDisplay.map ((transaction, i) =>{
                return <TransactionItem key={`${i}-${transaction.stock.label}`} transaction={transaction} setSelectedStock={setSelectedStock}/>
            })}
        </tbody>
    </table>
    </>
}

export default MyTransactions