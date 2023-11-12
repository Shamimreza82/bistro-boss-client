import "./login.css";
import logoImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {

    const chaptchRef = useRef(null)
    console.log(chaptchRef);
    const [disebale, setDiseble] = useState(true)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = {
      email,
      password,
    };

    console.log(user);
  };

  const validateChaptch = () => {
        const value = chaptchRef.current.value
        if(validateCaptcha(value)) {
            setDiseble(false)    
        } else {
            setDiseble(true)
        }
       
  }


  return (
    <div className="login-img ">
      <div className="hero min-h-screen ">
        <div className="hero-content gap-24 shadow-2xl p-20 rounded-lg">
          <div className="text-center lg:text-left">
            <img src={logoImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <p className="text-2xl text-center font-bold pt-10">Login</p>
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  name="captcha"
                  id=""
                  placeholder="type the text above"
                  className="py-2 px-2"
                  ref={chaptchRef}
                />
                 <button onClick={validateChaptch} className="btn btn-outline btn-accent">Validate</button>
              </div>
             
              <div className="form-control mt-6">
                <input
                 disabled={disebale}
                  className="btn bg-[#D1A054] text-white hover:bg-slate-300"
                  type="submit"
                  value="login"
                />
             
              </div>
              <div>
                <p>
                  {" "}
                  New here?{" "}
                  <span className="font-bold text-[#D1A054]">
                    create New Account
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
