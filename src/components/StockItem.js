import React from "react";

function StockItem({stockData}){


    return <tr>
    <th>{stockData.label}</th>
    <th>{stockData.name}</th>
    <th>{stockData.opening_price}</th>
    <th>{stockData.price}</th>
    <th>{stockData.change}</th>
</tr>
}

export default StockItem;