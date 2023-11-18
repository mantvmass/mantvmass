import { createBrowserRouter } from "react-router-dom";


// load views
// import Home from "../views/Home";
import NotFound from "../views/error/NotFound";


const routes = createBrowserRouter([
    { path: "/mantvmass/", element: <h4>อยู่รหว่างการอัพเดท...</h4> },
    // { path: "/mantvmass/", element: <Home/> },
    { path: "/mantvmass/*", element: <NotFound/> }
])


export default routes;