import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import manuImg from '../../../../assets/menu/banner3.jpg'
import dessert from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../../Hooks/useMenu";
import SectionTitel from "../../../../components/SectionTitel";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <Cover img={manuImg} title={"Our Manu"}></Cover>
            {/* main cover */}
           <SectionTitel subHeading={"Dont miss"}heading={"todays Offer"}></SectionTitel>
          
            {/* offered menu items */}

            <div className="max-w-7xl m-auto">
                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory items={desserts} title={"Dessert"}coverImage={dessert}></MenuCategory>
                <MenuCategory items={pizza} title={"Pizza"}coverImage={pizzaImg}></MenuCategory>
                <MenuCategory items={salad} title={"Salads"}coverImage={saladImg}></MenuCategory>
                <MenuCategory items={soup} title={"Soups"}coverImage={soupImg}></MenuCategory>
            </div>
           

           
        </div>
    );
};

export default Menu;