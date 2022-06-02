import React from "react";

function StockItem({stockData, setSelectedStock}){
    const {label, name, previous, price} = stockData

    return <tr>
    <td onClick={()=> setSelectedStock(stockData)}>{label}</td>
    <td onClick={()=> setSelectedStock(stockData)}>{name}</td>
    <td>{previous}</td>
    <th>{price}</th>
    <th>{((price-previous)/previous*100).toFixed(2)}%</th>
</tr>
}

export default StockItem;