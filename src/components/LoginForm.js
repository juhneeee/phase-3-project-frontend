import React, {useEffect, useState} from 'react'

function LoginForm({setLoggedInUser}){
    const [formData, setFormData] = useState({name: "", passcode: ""})
    const [users, setUsers] = useState([])

    function updateUsers(){
        fetch('http://localhost:9292/users')
        .then(r => r.json())
        .then(setUsers)
    }
    useEffect(()=> {
        updateUsers()
    },[])

    function handleChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    function handleLogin(){
        const user = users.find(u => u.name == formData.name && u.passcode == formData.passcode)
        user ? setLoggedInUser(user) : alert("That account does not exist. Try signing up?")
    }

    function handleSignup(){
        console.log("signup")
        const user = users.find(u => u.name == formData.name && u.passcode == formData.passcode)
        if (user){
            alert("That account already exists. Try logging in.")
        } else {
            const body = {...formData, balance: 1000, "account-type":"Real"}
            fetch(`http://localhost:9292/users`,{
                method: "POST",
                headers:{"Content-type": "application/json"},
                body: JSON.stringify(body)
            })
            .then(r => r.json())
            .then(setLoggedInUser)
            .then(updateUsers())
        }
    }

    function handleSubmit(e){
        if (e.key == "Enter") {handleLogin()}
    }
    

    return <div >
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Name here..."></input>
        <input type="number" min="0" max="9" name="passcode" 
            onChange={handleChange} value={formData.password} placeholder="Password here..."
            onKeyDown={handleSubmit}></input>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleSignup}>Sign Up</button>
    </div>
}

export default LoginForm;