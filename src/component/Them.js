import axios from 'axios'
import React, { useState } from 'react'

export default function Them(props) {
    const [user, setUser] = useState({
        name: "",
        age: null,
        OK: null
    })

    const submit = (e) => {
        e.preventDefault()
        console.log(user)

        // axios.post("https://61029c2e79ed6800174821f1.mockapi.io/api/axios", data = user)
        axios({
            url: "https://61029c2e79ed6800174821f1.mockapi.io/api/axios",
            method: "POST",
            data: user
        })
        .then(result => {
            props.getMovie()
        })
        .catch(error => {
            console.log(error)
        })

    }

    const handleChange = (e) => {
        let {name, value} = e.target
        setUser({...user, [name]: value})

    }

    return (
        <div>
            <form action="" onSubmit={submit}>
                <input name="name" type="text" placeholder="name" onChange={handleChange}/>
                <input name="age" type="text" placeholder="age" onChange={handleChange}/>
                <input name="OK" type="text" placeholder="ok" onChange={handleChange}/>
                <button>THEM</button>
            </form>
        </div>
    )
}
