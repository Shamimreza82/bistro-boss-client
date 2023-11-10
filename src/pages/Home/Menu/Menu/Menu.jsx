import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import manuImg from '../../../../assets/menu/banner3.jpg'
import PopulerManue from "../../PopulerManue/PopulerManue";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <Cover img={manuImg} title={"Our Manu"}></Cover>
            <PopulerManue></PopulerManue>
            <Cover img={manuImg} title={"Our Manu"}></Cover>
            <PopulerManue></PopulerManue>
            <Cover img={manuImg} title={"Our Manu"}></Cover>
            <PopulerManue></PopulerManue>
           
        </div>
    );
};

export default Menu;