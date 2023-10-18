import { useTranslation } from "react-i18next"
import "./style.css"

const EducationView = () => {

    const { t } = useTranslation()

    return (
        <div className="container">
            
            <h1 className="text-center">
                { t("education.title") }
            </h1>

            <section className="py-5">

                <ul className="timeline">

                    <li className="timeline-item mb-5">
                        <h5 className="fw-bold">ปริญญาตรี</h5>
                        <p className="text-muted mb-2 fw-bold">( กำลังศึกษาอยู่ในระดับชั้นปีที่: 3 )</p>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                            necessitatibus adipisci, ad alias, voluptate pariatur officia
                            repellendus repellat inventore fugit perferendis totam dolor
                            voluptas et corrupti distinctio maxime corporis optio?
                        </p>
                    </li>

                    <li className="timeline-item mb-5">
                        <h5 className="fw-bold">มัธยมศึกษา</h5>
                        <p className="text-muted mb-2 fw-bold">19 March 2020</p>
                        <p className="text-muted">
                            Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
                            aliquet laoreet sapien, eget pulvinar lectus maximus vel.
                            Phasellus suscipit porta mattis.
                        </p>
                    </li>
                   
                </ul>

            </section>

        </div>
    )

}


export default EducationView