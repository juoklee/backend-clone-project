import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginPage() {

    const [Email, setEmail] = useState(""); // email
    const [Password, setPassword] = useState(""); // password

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    /* axios submit */
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password,
        };

        axios.post("http://localhost:8000/api/users/login", body).then((response) => console.log(response));
    };

    

    return (
        <div>
            <h3>로그인 페이지</h3>
            <br/>

            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}></input>
                <br/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>
                <br/>
                <button type="submit">login</button>
            </form>

            <br/>
            <Link to="/signup">회원가입 하러가기</Link>
        </div>
    )
}

export default LoginPage;