import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainPage() {

    useEffect(() => {
        // 메인페이지 렌더링
        axios.get('/api/main')
        .then(response => {
            console.log(response)
        }, []);
    });

    return (
        <div>
            <h2>메인 페이지</h2>
            <br/>
            <Link to="/signup">회원가입 페이지</Link>
            <br/>
            <Link to="/login">로그인 페이지</Link>
        </div>
    )
}

export default MainPage;