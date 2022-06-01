import '../App.css';
import StockList from './StockList';
import LoginForm from './LoginForm';
import React, {useState} from 'react';
import NavBar from './NavBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyTransactions from './MyTransactions';


function App() {
  const [loggedInUser, setLoggedInUser] = useState("")


  return (
    <div className="App">
      {loggedInUser 
      ? <button > logout </button>
      : <LoginForm setLoggedInUser={setLoggedInUser}/>}
      <StockList />

      {loggedInUser && <MyTransactions loggedInUser={loggedInUser}/>}

      {/* <Routes>
        <Route path='/home' element={
          <StockList />
        } />

        <Route path='/my-transactions' element={<></>} />

        <Route path='/my-stocks' element={<></>} />

        <Route path='/logout' element={<></>} />
      </Routes> */}
    </div>
  );
}

export default App;
