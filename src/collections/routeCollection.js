
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Pricing from "../components/Pricing/Pricing";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";


const routeCollection = [
    {path: '/', element: <Home />, name: 'Home' },
    {path: '/about-us', element: <About />, name: 'About us' },
    {path: '/services', element: <Services />, name: 'Services' },
    {path: '/porftolio', element: <Portfolio />, name: 'Portfolio' },
    {path: '/team', element: <Team />, name: 'Team' },
    {path: '/pricing', element: <Pricing />, name: 'Pricing' },
    {path: '/contact', element: <Contact />, name: 'Contact' },
]

export default routeCollection;