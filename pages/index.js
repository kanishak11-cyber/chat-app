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
    const router = useRouter();
    function onSubmit(e) {
        
        e.preventDefault();
       
        if(username.length === 0 || secret.length === 0) return ;
        axios
        .put(
            "https://api.chatengine.io/users/",
            { username, secret },
            { headers: { "Private-key": "d59a5df5-6a75-4609-afed-570430180e28" } }
        ).then((r) => router.push("/chats"));
    }
    

    return (
        <div className="background">
            <div className="auth-container">
                <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
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