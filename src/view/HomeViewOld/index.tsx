import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import Github from "../../Interface/Github"
import Skills from "../../config/Skills"

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
            setUsers(data)
        })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    

    const SkillList = (list_name: string) => {
        return (
            Skills[list_name].map((data, index) => {
                return (
                    <div key={index} className="d-flex text-body-secondary pt-3">
                        <img className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" src={ data.cover }/>
                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <strong className="text-gray-dark">{ data.name }</strong>
                            <span className="d-block">{ data.skill }</span>
                        </div>
                    </div>
                )
            })
        )
    }


    return (
        <div className="container">

            <div className="row g-4 mb-5">

                <div className="col-md-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    { // ติด rate limit github
                        users?.avatar_url
                        ?
                        <img src={ users?.avatar_url } className="rounded-circle" width={290} height={290} alt="profile img"/>
                        :
                        <div className="profile-loader rounded-circle" style={{ width: 290, height:290, backgroundColor: '#777777', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{ color: "#ffffff", fontSize: 24,fontWeight: 'bold'}}>Loading...</p>
                        </div>
                    }

                    {/* // กรณีติดเรทลิมิต github
                    <img src="https://avatars.githubusercontent.com/u/32133224?v=4" className="rounded-circle" width={290} height={290} alt="profile img"/> */}

                </div>

                <div className="col-md-9 pt-4">
                    <h1 className="text-body-emphasis">{ t('home.title') }</h1>
                    <p className="fs-5">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>
                    <div className="mb-5">
                        <a href="/docs/5.3/examples/" className="btn btn-primary btn-lg px-4 rounded-1">Download CV</a>
                    </div>
                </div>

            </div>



            <div className="row gx-4">

                <div className="col-md-4">
                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <h6 className="border-bottom pb-2 mb-0">Programming Language</h6>

                        { SkillList("programming-language") }

                    </div>
                </div>

                <div className="col-md-4">
                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <h6 className="border-bottom pb-2 mb-0">Framework and Library</h6>

                        { SkillList("framework-and-library") }

                    </div>
                </div>

                <div className="col-md-4">
                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <h6 className="border-bottom pb-2 mb-0">Server and Database</h6>

                        { SkillList("server-and-database") }

                    </div>
                </div>

            </div>




        </div>
    )

}

export default HomeView