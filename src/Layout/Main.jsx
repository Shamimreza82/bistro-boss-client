import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBer from '../pages/Shared/NavBer/NavBer';

const Main = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    console.log(noHeaderFooter);

    return (
        <div>
            { noHeaderFooter || <NavBer></NavBer>}
                <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;