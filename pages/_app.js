import "../styles/auth.css";
import "../styles/chat.css";
import "../styles/index.css";
import {ContextProvider} from "../context";

export default function App( {Component,pageProps}){
    return(
        <ContextProvider>
            <Component {...pageProps}/>
        </ContextProvider>
    )
}