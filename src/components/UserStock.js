import React from "react";

function UserStock({stock}){
    const {label, quantity, price, current_value, amount_invested, net_change} = stock

    return <tr>
    <td>{label}</td>
    <td>{quantity}</td>
    <td>{price}</td>
    <td>{current_value}</td>
    <td>{amount_invested}</td>
    <td>{net_change}</td>
</tr>
}

export default UserStock;