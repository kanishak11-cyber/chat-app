import React, { useContext } from 'react';
import { Context } from "../context";

import { useRouter } from 'next/router';

import axios from 'axios';
export default function Auth() {
    const {
        username,
        secret,
        setUsername,
        setSecret,
    }=useContext(Context);

    // d59a5df5-6a75-4609-afed-570430180e28

    function onSubmit(e) {
        
        e.preventDefault();
        const username = e.target.elements.username.value;
        const secret = e.target.elements.secret.value;
        axios.post('http://localhost:3000/api/auth', {
            username,
            secret
        })
            .then(res => {
                setUsername(username);
                setSecret(secret);
                router.push('/dashboard');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="background">
            <div className="auth-container">
                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="auth-title">CHAT APP</div>

                    <div className="input-container">
                        <input 
                         type="text" 
                         placeholder="Username"
                         className="text-input"
                         onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <input 
                         type="password" 
                         placeholder="Password"
                         className="text-input"
                         onChange={e => setSecret(e.target.value)}
                        />
                    </div>
                    <button type='submit' className="submit-button">
                        Login / Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}