import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useGetGithubByNameQuery, useGetGithubOrgByNameQuery } from "../../services/github";
import "./style.css"

const Home = () => {

    const { t } = useTranslation()

    const { data: forAccountData, error: forAccountError, isLoading: forAccountIsLoading } = useGetGithubByNameQuery('mantvmass')
    const { data, error, isLoading } = useGetGithubOrgByNameQuery('mantvmass')

    return (

        <Layout>

            <div className="container pt-5">

                <div className="row g-4 mb-5">

                    <div className="col-md-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            forAccountError ? (

                                <div className="rounded-circle" style={{ width: 290, height:290, backgroundColor: '#777777', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className="m-0 p-0">Oh no, there was an error</p>
                                </div>

                            ) : forAccountIsLoading ? (

                                <div className="rounded-circle" style={{ width: 290, height:290, backgroundColor: '#777777', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className="spinner-grow" role="status" style={{ width: 290, height: 290 }}>
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>

                            ) : forAccountData ? (
                                <img src={ forAccountData.avatar_url } className="rounded-circle" width={290} height={290} alt="profile img"/>
                            ) : null
                        }
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
                                <h5 className="text-white p-0 m-0">{ t("home.organization.title") }</h5>
                            </div>

                            <div className="card-body" style={{ borderRadius: "0 0 0.375rem 0.375rem" }}>

                                {
                                    error ? (

                                        <h1></h1>

                                    ) : isLoading ? (

                                        <h1></h1>
        
                                    ) : data ? (

                                        data.map((data, index) => {
                                            return (
                                                <a href={ data.url } target="_blank">
                                                    <div className="card mb-3" key={ index }>
                                                        <div className="row g-0">
                                                            <div className="col-md-2">
                                                                <img src={data.avatar_url} className="img-fluid rounded-start"  alt={ data.login }/>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <div className="card-body p-0 ps-2">
                                                                    <h5 className="card-title m-0 mt-2 mb-1">{ data.login }</h5>
                                                                    <p className="card-text lh-sm">{ data.description }</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        })

                                    ) : null
                                }

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </Layout>

    )

}

export default Home