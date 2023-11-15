import logoImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the data base");
              reset();
              Swal.fire({
                title: "Good job!",
                text: "User Profile Update",
                icon: "success",
              });
            }
          });
        })
        .catch((error) => console.error(error));
    });
  };

  console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register</title>
      </Helmet>
      <div className="login-img ">
        <div className="hero min-h-screen ">
          <div className="hero-content gap-24 shadow-2xl p-20 rounded-lg">
            <div className="text-center lg:text-left">
              <img src={logoImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <p className="text-2xl text-center font-bold pt-10">Register</p>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is Required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("PhotoURL", { required: true })}
                    placeholder="PhotoURL"
                    className="input input-bordered"
                  />
                  {errors.PhotoURL && (
                    <span className="text-red-600">PhotoURL is Required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is Required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">password is required</p>
                  )}
                  {errors.password?.type === "minlength" && (
                    <p className="text-red-600">password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxlength" && (
                    <p className="text-red-600">
                      password must be length then 20 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must contain one digit from 1 to 9, one lowercase
                      letter, one uppercase letter, one special character, no
                      space, and it must be 8-16 characters long.
                    </p>
                  )}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054] text-white hover:bg-slate-300"
                    type="submit"
                    value="Register"
                  />
                </div>
                 
                <div>
                  <p>
                    {" "}
                    Already have an account?
                    <Link to="/login" className="font-bold text-[#D1A054]">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
              <div className="flex justify-center">
              <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
