
import { Link } from 'react-router-dom';
import Cover from '../../../Shared/Cover/Cover';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, coverImage}) => {
    return (
        <div className='py-7 mt-7'>
            {
                title && <Cover img={coverImage} title={title}></Cover>
            }
             <div className='grid md:grid-cols-2 gap-4 mt-10'>
                {
                    items.map(items => <MenuItem
                    key={items._id}
                    item={items}
                    ></MenuItem>)
                }
               
            </div>
           <div className='flex justify-center'>
          <Link to={`/order/${title}`}>
                <button className='btn'>Order Now</button>
          </Link>
           </div>
        </div>
    );
};

export default MenuCategory;