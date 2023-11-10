import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerManue from "../PopulerManue/PopulerManue";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl m-auto">
                <Category></Category>
                <PopulerManue></PopulerManue>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;