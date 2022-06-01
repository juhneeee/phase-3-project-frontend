import React from "react";

function UserStock({stock}){
    const {label, quantity, price, current_value, amount_invested, net_change} = stock

    return <tr>
    <td>{label}</td>
    <td>{quantity}</td>
    <td>{price.toFixed(2)}</td>
    <td>{current_value.toFixed(2)}</td>
    <td>{amount_invested.toFixed(2)}</td>
    <td>{net_change.toFixed(2)}</td>
    <td>{net_change<0 ? "-" : "+"}{Math.abs((net_change/amount_invested*100)).toFixed(2)}%</td>
</tr>
}

export default UserStock;