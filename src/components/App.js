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
    fetch(`http://localhost:9292/users/${loggedInUser.id}/transactions`)
    .then((r) => r.json())
    .then(setTransactions)
  }

  function updateUser(){
    fetch(`http://localhost:9292/users/${loggedInUser.id}`)
    .then((r) => r.json())
    .then(setLoggedInUser)
  }

  function updatePrices(){
    fetch(`http://localhost:9292/update/prices`)
    .then(updateStocks)
    .then(updateUser)
  }

  function fakesGamble(){
    fetch(`http://localhost:9292/fakes/gamble`)
    .then(updateTransactions)
    .then(updateUser)
  }

  return (
    <div className="App">

      <div className = "left-div">
      <StockList stocks={stocks} setSelectedStock={setSelectedStock} updateStocks={updateStocks}/>
      {loggedInUser && <MyPorfolio loggedInUser={loggedInUser}/>}
      {loggedInUser && <MyTransactions loggedInUser={loggedInUser} transactions={transactions} updateTransactions={updateTransactions} setSelectedStock={setSelectedStock}/>}
      </div>
      

      <div className="right-div">
      {loggedInUser 
      ? <button onClick={() => setLoggedInUser("")}> logout </button>
      : <LoginForm setLoggedInUser={setLoggedInUser}/>}

        <button onClick={updatePrices}>Update Prices</button>
        <button onClick={fakesGamble}>Gamble</button>

        {selectedStock && 
        <StockDetail selectedStock={selectedStock} loggedInUser={loggedInUser} updateTransactions={updateTransactions} updateUser={updateUser}/>}
      </div>
    </div>
  );
}

export default App;
