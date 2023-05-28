import { useState } from "react"
import "./SignUp.scss"
import { useContext } from "react";
import   {UserContext} from "../../../context/userContext"

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook} from "react-icons/fa";
const SignUp = () => {

    const {dispatch} = useContext(UserContext);
    
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


     const loginHangler = (e) =>{
        e.preventDefault();

        if(name.length !== 0 && email.length !== 0 && password.length !== 0){
            const user = [name, email, password];
            dispatch({type:"login",payload: user});
            console.log(user);
            localStorage.setItem("user",JSON.stringify(user));
    };
    }



  return (
    <div className="SignUp">
        <div className="content_form">
            <div className="title_form">
                <h1>sign up</h1>
                <p>sign up for your portal in kahine books</p>
            </div>
            <form className="content_form_signUp">
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter Your User name' onChange={(e) =>setName(e.target.value)} value={name} />
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">Email</label>
                        <input type="email" placeholder='Enter Your User email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">Create Password</label>
                        <input type="password" placeholder='Enter Your Password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">Confirm Password</label>
                        <input type="password" placeholder='Enter Your Password'/>
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_from">
                        <button
                        onClick={loginHangler}
                        >Sign Up</button>
                    </div>
                </div>
            </form>
            <div className="or_Auth">
                <div className="text_auth">or</div>
                <div className="auth auth-Google">
                    <button className="auth-button"><FcGoogle  className="icon-auth"/> <span> Sign up with Google</span></button>
                </div>
                <div className="auth auth-facebook">
                    <button className="auth-button"><FaFacebook className="icon-auth"/><span>Sign up with Facebook</span></button>
                </div>
            </div>
            <div className="account">
                Already have an account? <Link to="/signIn">Log in</Link>
            </div>
            <div className="error">
                <p>please fill full all the fields</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp