import React, { useContext } from 'react';
import { Context } from "../context";

import { useRouter } from 'next/router';

import axios from 'axios';
export default function Auth() {
    const {
        setUsername,
        setSecret,
    }=useContext(Context);
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