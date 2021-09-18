import React from 'react'

export default function CapNhat() {
    const submit = (e) => {
        

    }

    const handleChange = (e) => {
       

    }


    return (
        <div>
            <form action="" onSubmit={submit}>
                <input name="name" type="text" placeholder="name" onChange={handleChange}/>
                <input name="age" type="text" placeholder="age" onChange={handleChange}/>
                <input name="OK" type="text" placeholder="ok" onChange={handleChange}/>
                <button>CAP NHAT</button>
            </form>
        </div>
    )
}
