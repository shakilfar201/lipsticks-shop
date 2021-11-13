import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';



const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [addminSuccess, setAdminSuccess] = useState(false)


    const handleInput = (e) => {
        setEmail(e.target.value)
    }

    const handleAdmin = (e) => {
        e.preventDefault()
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount){
                    setAdminSuccess(true)
                }
            })
    }

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'lawngreen' }}>
                Make An Admin**
            </Typography>

            <form onSubmit={handleAdmin}>
                {addminSuccess && <Alert sx={{ width: "50%", marginLeft: 39, mb: 2 }} severity="success">Create Admin Successfully</Alert>}
                <TextField
                    sx={{ width: "50%", m: 2 }}
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    onBlur={handleInput}
                    variant="outlined" /> <br />
                <Button type="submit" variant="contained">Make Admin </Button>
            </form>
        </>
    );
};

export default MakeAdmin;