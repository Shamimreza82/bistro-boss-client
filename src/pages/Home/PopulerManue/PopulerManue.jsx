import React, { useEffect, useState } from 'react';
import SectionTitel from '../../../components/SectionTitel';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopulerManue = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('manu.json')
        .then(res => res.json())
        .then(data => {
            const populerItems = data.filter(item => item.category === 'popular')
            setMenu(populerItems)})
    }, [])
    console.log(menu);

    return (
        <section>
            <SectionTitel
            heading={'from our mane'}
            subHeading={"Popular Items"}
            ></SectionTitel>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(items => <MenuItem
                    key={items._id}
                    item={items}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerManue;