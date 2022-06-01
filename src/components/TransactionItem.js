import React from "react";

function TransactionItem({transaction, setSelectedStock}) {
    // console.log(trasactionData)
    const {balance_change, created_at, price, quantity, transaction_type, stock} = transaction

    function formatTime(dateStr){
        return `${dateStr.substr(5,2)}/${dateStr.substr(8,2)}/${dateStr.substr(2,2)}`
    }

    const time= formatTime(created_at)

    return <tr>
    <td >{time}</td>
    <td onClick={() =>setSelectedStock(stock)}>{stock.label}</td>
    <td >{transaction_type}</td>
    <td >{price}</td>
    <td >{quantity}</td>
    <td >{balance_change}</td>
</tr>
}

export default TransactionItem;