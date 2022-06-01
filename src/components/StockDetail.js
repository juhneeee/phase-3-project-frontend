import React, {useState} from "react";

function StockDetail({selectedStock, loggedInUser,updateTransactions}){
    const [input, setInput] = useState(0)
    const numberOwned = loggedInUser["list_stocks"].find(i=> i.label == selectedStock.label).quantity

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/trade/${loggedInUser.id}/${selectedStock.id}/${input}`)
        .then(()=>updateTransactions())
    }

    return <>
    <h1>{selectedStock.label}</h1>
    
    <form onSubmit={handleSubmit}>
        <p>Hello {loggedInUser.name}. Your current balance is {loggedInUser.balance}. You current own {numberOwned} for {selectedStock.label}.</p>
        <input type="number" onChange={(e) =>{setInput(e.target.value)}} value={input}></input>
        <button type="submit">Trade!</button>

        <h2>{selectedStock.name}</h2>

    </form>
    </>
}

export default StockDetail;