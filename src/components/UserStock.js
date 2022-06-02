import React,{useState, useEffect} from "react";

function UserStock({stock}){
    const {label, quantity, price, current_value, amount_invested, net_change} = stock
    const [color, setColor] = useState("")

    const change = current_value + amount_invested

    useEffect(()=>{
        if (Math.abs(change/amount_invested)> 0.03){
        change > 0 ? setColor("tr-green") : setColor("tr-red")
        } else {setColor("")}
    },[])

    return <tr className={color} >
    <td>{label}</td>
    <td>{quantity}</td>
    <td>{price.toFixed(2)}</td>
    <td>{current_value.toFixed(2)}</td>
    <td>{amount_invested.toFixed(2)}</td>
    <td>{net_change.toFixed(2)}</td>
    {/* this is percent change */}
    <td>{net_change<0 ? "-" : "+"}{Math.abs((net_change/amount_invested*100)).toFixed(2)}%</td>
</tr>
}

export default UserStock;