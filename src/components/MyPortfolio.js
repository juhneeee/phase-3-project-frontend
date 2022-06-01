import React from 'react'
import UserStock from './UserStock'

function MyPorfolio({loggedInUser}){
    const {list_stocks,net_worth,balance, portfolio_value} = loggedInUser
    return <table>
        <tr>
            <th>Label</th>
            <th>Quantity Owned</th>
            <th>Price</th>
            <th>Current Value</th>
            <th>Amount Invested</th>
            <th>Net Change</th>
        </tr>
        {list_stocks.map(s => {
            return <UserStock key={s.label} stock={s}/>
        })}
        <h3>Balance: {balance} </h3> 
        <h3>Portfolio: {portfolio_value}</h3>
    </table>
}

export default MyPorfolio