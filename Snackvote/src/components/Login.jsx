import React from 'react';
import { useState } from 'react';
import { Card,Image, Input, Button  } from 'antd';
import img from "../../public/images/logo-1.png"
import 'antd/dist/antd.css';
import '../components/Login.css'
import Password from 'antd/lib/input/Password';

const Login = (props) => {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit(Name);
    }

    return (
        <>
        <Card className='card-area' size=' large'>
        <div className='image'><img src={img} /></div>
            <p style={{textAlign:'center', fontSize:'32px'}}>Login</p>
                <Input onChange={handleChange} className='input-area' placeholder="Username" size='large' />
                <Input className='input-area' placeholder="Password" size='large' />
                <p>{Name}</p>

                <div className='button-area'><Button onClick={handleSubmit} className='btn' type="primary" size='large' >Submit</Button></div>
        </Card>
        </>
    );
}

export default Login;
