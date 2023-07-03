import { useState } from "react"
import { BrightnessHighFill, Github, Facebook, MoonStarsFill } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import i18n from "../../i18n";
import "./styles.css"

const Navbar = () => {

    // Load Language func
    const { t } = useTranslation()


    // setTheme
    const setThemeMode = (is_theme: string) => {
        document.querySelector("body")?.setAttribute("data-bs-theme", is_theme)
        localStorage.setItem("theme", is_theme)
        setTheme(is_theme)
    }

    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme !== null ? savedTheme : "light";
    const [theme, setTheme] = useState<string>(initialTheme)


    // setLang
    const setLangMode = (is_lang: string) => {
        localStorage.setItem("lang", is_lang)
        i18n.changeLanguage(is_lang)
        setLang(is_lang)
    }
    const savedLang = localStorage.getItem("lang");
    const initialLang = savedLang !== null ? savedLang : "th";
    const [lang, setLang] = useState<string>(initialLang)


    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{background: 'linear-gradient(99deg, rgba(44,40,128,1) 32%, rgba(26,215,99,1) 100%)' }}>
        {/* <nav className="navbar navbar-expand-lg sticky-top"> */}
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink end to="/mantvmass/" className={ ({ isActive }) => isActive ? "nav-link fw-bolder active" : "nav-link" }>{ t('navbar.home') }</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink end to="/mantvmass/skills" className={ ({ isActive }) => isActive ? "nav-link fw-bolder active" : "nav-link" }>{ t('navbar.skills') }</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink end to="/mantvmass/works" className={ ({ isActive }) => isActive ? "nav-link fw-bolder active" : "nav-link" }>{ t('navbar.works') }</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink end to="/mantvmass/education" className={ ({ isActive }) => isActive ? "nav-link fw-bolder active" : "nav-link" }>{ t('navbar.education') }</NavLink>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        
                        <li className="nav-item" style={{ marginTop: -1 }}>
                            <a className="nav-link" href="https://github.com/mantvmass" target="_blank" rel="github">
                                <Github />
                                <small className="d-lg-none ms-2">GitHub</small>
                            </a>
                        </li>

                        <li className="nav-item" style={{ marginTop: -1 }}>
                            <a className="nav-link" href="https://www.facebook.com/PhuminMaliwan" target="_blank" rel="facebook">
                                <Facebook />
                                <small className="d-lg-none ms-2">Facebook</small>
                            </a>
                        </li>

                        <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                            <hr className="d-lg-none my-2 text-white-50"/>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className={lang.toLocaleLowerCase() == "th" ? "fi fi-th" : "fi fi-gb"}></i>
                            </a>
                            <ul className="dropdown-menu" style={{ padding: "5px", minWidth: "130px", fontSize: "14px" }}>
                                <li><a className={localStorage.getItem("lang") == "th" ? "dropdown-item rounded-1 theme-active" : "dropdown-item rounded-1"} href="#" onClick={() => setLangMode("th")}><span className="fi fi-th"></span> Thai</a></li>
                                <li style={{ marginTop: 5 }}><a className={localStorage.getItem("lang") == "en" ? "dropdown-item rounded-1 theme-active" : "dropdown-item rounded-1"} href="#" onClick={() => setLangMode("en")}><span className="fi fi-gb"></span> English</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                            <hr className="d-lg-none my-2 text-white-50"/>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                { theme == "dark" ? <MoonStarsFill /> : <BrightnessHighFill /> }
                            </a>
                            <ul className="dropdown-menu" style={{ padding: "5px", minWidth: "110px", fontSize: "13px" }}>
                                <li>
                                    <a className={theme == "ligth" ? "dropdown-item rounded-1 theme-active" : "dropdown-item rounded-1"} href="#" onClick={() => setThemeMode("ligth") }>
                                        <BrightnessHighFill /> Light
                                    </a>
                                </li>
                                <li style={{ marginTop: 5 }}>
                                    <a className={theme == "dark" ? "dropdown-item rounded-1 theme-active" : "dropdown-item rounded-1"} href="#" onClick={() => setThemeMode("dark") }>
                                        <MoonStarsFill /> Dark
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}


export default Navbar;