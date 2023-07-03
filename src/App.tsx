import Navbar from './components/Navbar'
import Footer from './components/Footer';
// import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

// Load View
import HomeView from './view/HomeView';
import EducationView from './view/EducationView';
import ER404 from './view/ER404';


function App() {

    // const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <div className="mt-5">
                <Routes>
                    <Route path="/mantvmass/" element={ <HomeView/> }/>
                    <Route path="/mantvmass/skills" element={ <EducationView/> }/>
                    <Route path="/mantvmass/education" element={ <EducationView/> }/>
                    <Route path="/mantvmass/*" element={ <ER404/> } />
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App
