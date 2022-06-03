import '../App.css';
import logo from './logo.png';
import React, {useState, useEffect} from 'react';
import StockList from './StockList';
import LoginForm from './LoginForm';
import MyTransactions from './MyTransactions';
import StockDetail from './StockDetail';
import MyPorfolio from './MyPortfolio';


function App() {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [selectedStock, setSelectedStock] = useState("")
  const [stocks, setStocks] = useState([])
  const [transactions, setTransactions] = useState([])
  
  const [count, setCount] = useState(0)

  useEffect(()=>{
    // const interval = setInterval(()=>{
      // setCount(count=> (count+1)%4)
    // }, 50000);
    // return () => clearInterval(interval)
  },[])

  useEffect(()=>{
    if(count == 0){
      // fakesGamble()
    } else {
      updatePrices()
    }
  }, [count])

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
    if (loggedInUser){
      fetch(`http://localhost:9292/users/${loggedInUser.id}`)
      .then((r) => r.json())
      .then(setLoggedInUser)
    }
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
      <div className='top-div'>
        <img className="image" src={logo}></img>
      </div>
      
      <div className = "left-div">
      <StockList stocks={stocks} setSelectedStock={setSelectedStock} updateStocks={updateStocks}/>
      {loggedInUser && 
        <>
        <MyPorfolio loggedInUser={loggedInUser}/>
        <MyTransactions loggedInUser={loggedInUser} transactions={transactions} updateTransactions={updateTransactions} setSelectedStock={setSelectedStock}/>
        </>}
      </div>
      

      <div className="right-div">
      {loggedInUser 
      ? <div className="content-right">
          <label>Welcome {loggedInUser.name} </label>
          <button onClick={() => setLoggedInUser(false)}> Log Out </button> 
        </div>
      : <LoginForm setLoggedInUser={setLoggedInUser}/>}

      {loggedInUser['account_type']=="Admin" &&
        <div>{count} minutes have elapsed since mounting.
        <button onClick={updatePrices}>Update Prices</button>
        <button onClick={fakesGamble}>Gamble</button>
        </div>
      }
        
        {selectedStock && 
        <StockDetail 
          selectedStock={selectedStock} 
          loggedInUser={loggedInUser} 
          updateTransactions={updateTransactions} 
          updateUser={updateUser}/>}
      </div>
    </div>
  );
}

export default App;
