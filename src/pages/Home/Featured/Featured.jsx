import SectionTitel from "../../../components/SectionTitel";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed ">
        
            <SectionTitel
            heading={"FROM OUR MENU"}
            subHeading={"Check it out"}
             ></SectionTitel>
     
            <div className="flex justify-between items-center gap-14 text-white px-20 pb-20">
                <img className="w-[50%]" src={img} alt="" />
                <div>
                    <p>Aug 20, 2029</p>
                    <h2 className="uppercase text-2xl">Wheare can i get sum </h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus earum dolorem et debitis vitae necessitatibus quo illum eaque assumenda quia. Iste sapiente laborum est eius odit numquam accusamus ipsum neque!</h3>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;