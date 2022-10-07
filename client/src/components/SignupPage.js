import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignupPage() {

    const [Email, setEmail] = useState(""); // email
    const [Name, setName] = useState(""); // name
    const [Password, setPassword] = useState(""); // password
    const [ComfirmPassword, setComfirmPassword] = useState(""); // password comfirm

    /* event 발생하면 state 변경 */
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onComfirmPasswordHandler = (e) => {
        setComfirmPassword(e.currentTarget.value);
    }

    /* axios submit */
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            name: Name,
            email: Email,
            password: Password,
        };

        axios.post("http://localhost:8000/api/users/signup", body).then((response) => console.log(response));
    };


    return (
        <div>
            <h3>회원가입 페이지</h3>
            <br/>

            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}></input>
                <br/>
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}></input>
                <br/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>
                <br/>
                <label>ComfirmPassword</label>
                <input type="password" value={ComfirmPassword} onChange={onComfirmPasswordHandler}></input>
                <br/>
                <button type="submit">join</button>
            </form>

            <br/>
            <Link to="/login">로그인 하러가기</Link>
        </div>
    )
}

export default SignupPage;