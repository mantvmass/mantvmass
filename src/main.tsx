import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from './i18n.ts'
import { RouterProvider } from 'react-router-dom' 
import routes from './config/routes.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
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
        <Provider store={ store }>
            <RouterProvider router={ routes } />
        </Provider>
    </React.StrictMode>
)
