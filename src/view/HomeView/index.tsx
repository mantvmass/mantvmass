import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import { Gear } from "react-bootstrap-icons";
import Github from "../../Interface/Github"
import "./style.css"

const HomeView = () => {

    const { t } = useTranslation()


    // ติด rate limit github
    const [users, setUsers] = useState<Github>()
    const fetchUserData = () => {
        fetch("https://api.github.com/users/mantvmass")
        .then(response => {
            
            return response.json()
        })
        .then(data => {
            setInterval(() => {
                setUsers(data)
            }, 1000)
            
        })
    }
    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <div className="container">


            <div className="row g-4 mb-5">

                <div className="col-md-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    { // ติด rate limit github
                        users?.avatar_url
                        ?
                        <img src={ users?.avatar_url } className="rounded-circle" width={290} height={290} alt="profile img"/>
                        :
                        <div className="rounded-circle" style={{ width: 290, height:290, backgroundColor: '#777777', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="spinner-grow" role="status" style={{ width: 290, height: 290 }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }

                    {/* // กรณีติดเรทลิมิต github
                    <img src="https://avatars.githubusercontent.com/u/32133224?v=4" className="rounded-circle" width={290} height={290} alt="profile img"/> */}

                </div>

                <div className="col-md-9 pt-4">
                    <h1 className="text-body-emphasis">{ t('home.title') }</h1>
                    <p className="fs-5">{ t("home.desc") }</p>
                    <div className="mb-5">
                        <a href="#" className="btn btn-lg px-4 text-white fw-bold rounded-1 disabled" style={{ backgroundColor: "#11C657" }}>Download CV</a>
                    </div>
                </div>

            </div>



            <div className="row gx-3 mt-4">

                <div className="col-12 col-md-5 mb-3">

                   <div className="card">

                        <div className="card-header" style={{ backgroundColor: "#3733A1" }}>
                            <h5 className="text-white p-0 m-0">{ t("home.about.title") }</h5>
                        </div>

                        <div className="card-body">

                            <ul className="p-0 mb-0">

                                <li className="d-flex align-items-center mb-1">
                                    <span className="me-2">{ t("home.about.name.key") }:</span>
                                    <span className="fw-bold">{ t("home.about.name.value") }</span>
                                </li>
                                
                                <li className="d-flex align-items-center mb-1">
                                    <span className="me-2">{ t("home.about.age.key") }:</span>
                                    <span className="fw-bold">{ new Date().getFullYear() - 2002 } { t("home.about.age.value") }</span>
                                </li>

                                <li className="d-flex align-items-center mb-0">
                                    <span className="me-2">{ t("home.about.education.key") }:</span>
                                    <Link to="/mantvmass/education">
                                        <span className={localStorage.getItem("theme") == "dark" ? "fw-bold text-body" : "fw-bold text-dark"}>
                                            { t("home.about.education.value") }
                                        </span>
                                    </Link>
                                </li>

                            </ul>

                        </div>
                   </div>

                </div>


                <div className="col-12 col-md-7">

                    <div className="card">

                        <div className="card-header" style={{ backgroundColor: "#3733A1" }}>
                            <h5 className="text-white p-0 m-0">{ t("home.hire.title") }</h5>
                        </div>

                        <div className="card-body p-0" style={{ borderRadius: "0 0 0.375rem 0.375rem", height: 380 }}>

                            <div className="overly-working -none" style={{ height: 380 }}>
                                <h3>
                                    <Gear className="working-spin"/>
                                    { t("home.hire.toast") }
                                </h3>
                            </div>
                            

                            <div className="p-3">
                                
                                {/* Test */}
                             
                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>




        </div>
    )

}

export default HomeView