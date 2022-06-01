import React, {useEffect, useState} from 'react'

function LoginForm({setLoggedInUser}){
    const [formData, setFormData] = useState({name: "", password: ""})
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch('http://localhost:9292/users')
        .then(r => r.json())
        .then(setUsers)
    },[])

    function handleChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const user = users.find(u => u.name == formData.name && u.passcode == formData.password)
        user? setLoggedInUser(user.id) : console.log("That account dos not exist")

    }
    

    return <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Name here..."></input>
        <input type="text" name="password" onChange={handleChange} value={formData.password} placeholder="Password here..."></input>
        <button type="submit">Log In</button>
    </form>
}

export default LoginForm;