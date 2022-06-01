import React from "react";

function TransactionItem({transaction}) {
    // console.log(trasactionData)
    const {balance_change, created_at, price, quantity, transaction_type} = transaction

    function formatTime(dateStr){
        return `${dateStr.substr(5,2)}/${dateStr.substr(8,2)}/${dateStr.substr(2,2)}`
    }

    const time= formatTime(created_at)

    return <tr>
    {/* <th >Time</th>

    <th >Label</th>

    <th >Type</th>

    <th >Price</th>

    <th >Quantity</th>

    <th >Balance Change</th> */}

    <th >{time}</th>

    <th >Label</th>

    <th >{transaction_type}</th>

    <th >{price}</th>

    <th >{quantity}</th>

    <th >{balance_change}</th>
</tr>
}

export default TransactionItem;