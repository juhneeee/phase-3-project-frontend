import React, {useState} from "react";

function StockDetail({selectedStock, loggedInUser, updateTransactions, updateUser}){
    const [input, setInput] = useState(0)
    const isOwn = loggedInUser["list_stocks"].find(i=> i.label == selectedStock.label)
    const numberOwned = isOwn ? isOwn.quantity : 0

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/trade/${loggedInUser.id}/${selectedStock.id}/${input}`)
        .then(()=>updateTransactions())
        .then(()=>updateUser())
    }

    return <>
    <h1>{selectedStock.label}</h1>
    
        <h2>{selectedStock.name}</h2>
        {loggedInUser && <>
            <h2>Current Price: {selectedStock.price.toFixed(2)}</h2>
            <form onSubmit={handleSubmit}>
            <p>Hello {loggedInUser.name}. Your current balance is {loggedInUser.balance.toFixed(2)}. You current own {numberOwned} for {selectedStock.label}.</p>
            <input type="number" onChange={(e) =>{setInput(e.target.value)}} value={input}></input>
            <button type="submit">Trade!</button>
            </form>
            </>
        }
        


    </>
}

export default StockDetail;