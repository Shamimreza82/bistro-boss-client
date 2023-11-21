import SectionTitel from '../../../components/SectionTitel';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaUtensils } from 'react-icons/fa';



const Image_Hosting_key = import.meta.env.VITE_IMAGEHOSTING_KEY
const image_hosting_key = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`

const UpdateMenu = () => {

    const {name, category, price, recipe, _id} = useLoaderData()
    

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = {image: data.images[0]}
    const res = await axiosPublic.post(image_hosting_key, imageFile, {
        headers: {
            "content-type": 'multipart/form-data'
        }
    })
    /// now send the data on server side 
    if(res.data.success){
        const menuItem = {
            name: data.name, 
            category: data.category, 
            price: parseFloat(data.price), 
            recipe: data.text, 
            image: res.data.data.display_url 
        }

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount > 0){
        // reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is Updated to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
      }
     
    }

  } 


    

    return (
        <div>
           <SectionTitel
           heading={"Update Items "}
           subHeading={"Refresh Info"}
           ></SectionTitel> 
           <div className="w-1/2 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name")}
              defaultValue={name}
              type="text"
              placeholder="Recipi name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Select Your Category</span>
              </label>
              <select
                {...register("category")}
                defaultValue={category}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  {" "}
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Dessert</option>
              </select>
            </div>
            <div className="w-full">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  {...register("price")}
                  defaultValue={price}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                {...register("text")}
                defaultValue={recipe}
                className="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
          <div className="w-full">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <input 
              {...register("images")}
              type="file" 
               className="file-input w-full max-w-xs" />
            </div>
          </div>
          <div className="btn mt-4">
            <input type="submit" value="Add Items" />
            <FaUtensils></FaUtensils>
          </div>

        </form>
      </div>
        </div>
    );
};

export default UpdateMenu;