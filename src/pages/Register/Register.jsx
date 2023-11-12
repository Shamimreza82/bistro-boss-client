import logoImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {

  const {register, handleSubmit, watch, formState: { errors },} = useForm();

  const onSubmit = data => {
        console.log(data);
  }

  console.log(watch("example")) 


  return (
    <div className="login-img ">
      <div className="hero min-h-screen ">
        <div className="hero-content gap-24 shadow-2xl p-20 rounded-lg">
          <div className="text-center lg:text-left">
            <img src={logoImg}  alt="" />
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
                {errors.name && <span className="text-red-600">Name is Required</span>}
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
                {errors.email && <span className="text-red-600">Email is Required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {minLength: 6, maxLength: 20 })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (<p>password is required</p>)}

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
