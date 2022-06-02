import React, {useEffect, useState} from "react";

function StockItem({stockData, setSelectedStock}){
    const {label, name, previous, price, percent_change} = stockData
    const [color, setColor] = useState("")

    useEffect(()=>{
        if (Math.abs(percent_change)> 0.03){
            percent_change > 0 ? setColor("tr-green") : setColor("tr-red")
        } else {setColor("")}
    },[price])

    return <tr className={color} >
        <th onClick={()=> setSelectedStock(stockData)}>{label}</th>
        <td onClick={()=> setSelectedStock(stockData)}>{name}</td>
        <td>{previous.toFixed(2)}</td>
        <th>{price.toFixed(2)}</th>
        <th>{percent_change > 0 && "+"}{(percent_change*100).toFixed(2)}%</th>
    </tr>
}

export default StockItem;