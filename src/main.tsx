import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import i18n from './i18n.tsx'
import { BrowserRouter } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "flag-icons/css/flag-icons.min.css";
import './index.css'


// set initialTheme | Change Theme from Navbar
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme !== null ? savedTheme : "light";
localStorage.setItem("theme", initialTheme)
document.querySelector("body")?.setAttribute("data-bs-theme", initialTheme)


// set initialLanguage | Change Language from Navbar
const savedLang = localStorage.getItem("lang");
const initialLang = savedLang !== null ? savedLang : "th";
localStorage.setItem("lang", initialLang)
i18n.changeLanguage(initialLang)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
