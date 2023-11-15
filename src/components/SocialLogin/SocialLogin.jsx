import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {signInWithGoogle} = useAuth()
    const axiosPublice = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithGoogle() 
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user.displayName, 
                email: result.user.email
            }
            axiosPublice.post('/users', userInfo )
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }


  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle className="text-2xl"></FaGoogle>
        Sign in with gmail
      </button>
    </div>
  );
};

export default SocialLogin;
