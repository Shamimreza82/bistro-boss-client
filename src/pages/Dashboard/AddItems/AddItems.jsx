import React from "react";
import SectionTitel from "../../../components/SectionTitel";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Image_Hosting_key = import.meta.env.VITE_IMAGEHOSTING_KEY
const image_hosting_key = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`


const AddItems = () => {
    const axiosPublic = useAxiosPublic()

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = {image: data.images[0]}
    const res = await axiosPublic.post(image_hosting_key,imageFile, {
        headers: {
            "content-type": 'multipart/form-data'
        }
    })
    console.log(res.data);
  } 





  return (
    <div>
      <SectionTitel
        heading={"Add an Items "}
        subHeading={"whats's New"}
      ></SectionTitel>
      <div className="w-1/2 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name")}
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

export default AddItems;
