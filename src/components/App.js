import '../App.css';
import StockList from './StockList';
import LoginForm from './LoginForm';
import React, {useState} from 'react';
// import NavBar from './NavBar';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import MyTransactions from './MyTransactions';
import StockDetail from './StockDetail';
import MyPorfolio from './MyPortfolio';


function App() {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [selectedStock, setSelectedStock] = useState("")
  const [stocks, setStocks] = useState([])
  const [transactions, setTransactions] = useState([])


  function updateStocks(){
    fetch("http://localhost:9292/stocks")
    .then((r) => r.json())
    .then(setStocks)
  }

  function updateTransactions(){
    fetch(`http://localhost:9292/transactions`)
    .then((r) => r.json())
    .then((d) => d.filter(t=> t.user_id == loggedInUser.id))
    .then(setTransactions)
  }

  function updateUser(){
    fetch(`http://localhost:9292/users/${loggedInUser.id}`)
    .then((r) => r.json())
    .then(setTransactions)
  }


  return (
    <div className="App">

      <div className = "left-div">
      <StockList stocks={stocks} setSelectedStock={setSelectedStock} updateStocks={updateStocks}/>
      {loggedInUser && <MyTransactions loggedInUser={loggedInUser} transactions={transactions} updateTransactions={updateTransactions} setSelectedStock={setSelectedStock}/>}
      {loggedInUser && <MyPorfolio loggedInUser={loggedInUser}/>}
      </div>
      

      <div className="right-div">
      {loggedInUser 
      ? <button onClick={() => setLoggedInUser("")}> logout </button>
      : <LoginForm setLoggedInUser={setLoggedInUser}/>}
        {selectedStock && 
        <StockDetail selectedStock={selectedStock} loggedInUser={loggedInUser} updateTransactions={updateTransactions} updateUser={updateUser}/>}
      </div>
    </div>
  );
}

export default App;
