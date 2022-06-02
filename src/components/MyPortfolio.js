import React, {useState} from 'react'
import UserStock from './UserStock'

function MyPorfolio({loggedInUser}){
    const {list_stocks,net_worth,balance, portfolio_value} = loggedInUser
    const [showTable, setShowTable] = useState(false)

    return <div className="div-table">
        <h1 className="fake-button hover" 
            onClick={()=>setShowTable(!showTable)}>Portfolio</h1>
            
        {showTable && 
            <table className='table'>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Quantity Owned</th>
                        <th>Price</th>
                        <th>Current Value</th>
                        <th>Amount Invested</th>
                        <th>Net Change</th>
                        <th>% change</th>
                    </tr>
                </thead>
                <tbody>
                    {list_stocks.map(s => {
                        return <UserStock key={s.label} stock={s}/>
                    })}
                </tbody>
            </table>
        }
        <h4>Balance: {balance.toFixed(2)} </h4> 
        <h4>Stock Value: {portfolio_value || 0}</h4>
        <h4>Net Worth: {net_worth || balance}</h4>
    </div>
}

export default MyPorfolio