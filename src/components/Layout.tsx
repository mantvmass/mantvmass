import Navbar from './Navbar'
import Footer from './Footer';

type LayoutProps = {
    children: JSX.Element | JSX.Element[]
}


// function Layout(props: LayoutProps) {
function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
                { children }
            <Footer/>
        </>
    )
}

export default Layout
