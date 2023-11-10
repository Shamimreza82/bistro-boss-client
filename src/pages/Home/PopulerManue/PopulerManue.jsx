
import SectionTitel from '../../../components/SectionTitel';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopulerManue = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <section>
            <SectionTitel
            heading={'from our mane'}
            subHeading={"Popular Items"}
            ></SectionTitel>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(items => <MenuItem
                    key={items._id}
                    item={items}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerManue;