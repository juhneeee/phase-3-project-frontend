import React, {useEffect, useState} from 'react'
import TransactionItem from './TransactionItem';

function MyTransactions ({loggedInUser}) {
    //loads past transactions
    const [transactions, setTransactions] = useState([])
    const [sortBy, setSortBy] = useState('Symbol')


    useEffect(() => {
        fetch(`http://localhost:9292/transactions`)
          .then((r) => r.json())
          .then((d) => d.filter(t=> t.user_id == loggedInUser))
          .then(setTransactions)
    }, []);

    let transactionsToDisplay = transactions.sort((a, b)=> a[sortBy] > b[sortBy] ? -1 : 1) 

    return <>
    <table className='table'>
        <tbody>
            <tr>
                <th ><h3 onClick={e => setSortBy('Time')}>Time </h3> </th>

                <th ><h3 onClick={e => setSortBy('Label')}>Symbol </h3> </th>

                <th ><h3 onClick={e => setSortBy('Type')}>Type </h3> </th>

                <th ><h3 onClick={e => setSortBy('Price')}>Price </h3> </th>

                <th ><h3 onClick={e => setSortBy('Quantity')}>Quantity </h3> </th>

                <th ><h3 onClick={e => setSortBy('Balance Change')}>Balance Change </h3> </th>
            </tr>

            {transactionsToDisplay.map ((transaction, i) =>{
                return <TransactionItem key={`${i}-${transaction.label}`} transaction={transaction}/>
            })}
        </tbody>
    </table>
    </>
}

export default MyTransactions