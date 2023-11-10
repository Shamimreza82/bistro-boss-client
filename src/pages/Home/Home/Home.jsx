import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerManue from "../PopulerManue/PopulerManue";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-screen-xl m-auto">
                <Category></Category>
                <BistroBoss></BistroBoss>
                <PopulerManue></PopulerManue>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;