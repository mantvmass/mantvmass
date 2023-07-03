import { useTranslation } from "react-i18next"

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className="container">
            <footer className="d-flex justify-content-between align-items-center py-3 mt-5 border-top">
                <p className="mb-3 mb-md-0 text-body-secondary">Copyright 2023 &copy; <span className="fw-bold">Phumin Maliwan</span></p>
                {/* <p className="mb-3 mb-md-0 text-body-secondary">Copyright {2002 - new Date().getFullYear()} &copy; <span className="fw-bold text-uppercase">mantvmass</span></p> */}
                <p className="mb-3 mb-md-0 text-body-secondary">{ t("footer.call") }: +66649759788</p>
            </footer>
        </div>
    )
}


export default Footer