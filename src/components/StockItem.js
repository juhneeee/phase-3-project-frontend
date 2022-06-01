import React from "react";

function StockItem({stockData, setSelectedStock}){


    return <tr>
    <td onClick={()=> setSelectedStock(stockData)}>{stockData.label}</td>
    <td onClick={()=> setSelectedStock(stockData)}>{stockData.name}</td>
    {/* <th>{stockData.opening_price}</th> */}
    <td>{stockData.price}</td>
    {/* <th>{stockData.change}</th> */}
</tr>
}

export default StockItem;