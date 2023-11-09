import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerManue from "../PopulerManue/PopulerManue";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl m-auto">
                <Category></Category>
                <PopulerManue></PopulerManue>
            </div>
            
        </div>
    );
};

export default Home;