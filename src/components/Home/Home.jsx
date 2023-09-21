import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    // navigation hook for router loading
    const navigation = useNavigation();
    // location hook for getting pathName
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading....</p> : navigation.state === 'submitting' ? <p>submitting...</p> : ''
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;