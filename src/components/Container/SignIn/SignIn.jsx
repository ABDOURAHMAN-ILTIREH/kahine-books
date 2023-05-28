import { useState } from "react";
import { Link } from "react-router-dom"
import "./SignIn.scss"

import { FcGoogle } from "react-icons/fc";
import { FaFacebook} from "react-icons/fa";

// import { useContext } from "react";
// import   {UserContext} from "../../../context/userContext"

const SignIn = () => {

    // const {dispatch} = useContext(UserContext);
    
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const singupHangler = (e) =>{
        e.preventDefault();

        if(name.length !== 0 && email.length !== 0 && password.length !== 0){

            const user = [name, email, password];
            let User = JSON.parse(localStorage.getItem("user"));
            console.log(User[0]);
            console.log(user);


            if(User.name === user.name && User.email === user.email && User.password === user.password){
                console.log("succsess");
            }

        };
    }


  return (
    <div className='SignIn'>
        <div className="content_form">
            <form className="content_form_signIn">
            <div className="title_form">
                <h1>Login from</h1>
                <p>Login to your portal in Kahinebooks be authetic !</p>
            </div>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">name</label>
                        <input type="text" placeholder='Enter Your User Name' onChange={(e) =>setName(e.target.value)} value={name}/>
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">email</label>
                        <input type="text" placeholder='Enter Your User Email' onChange={(e) =>setEmail(e.target.value)} value={email} />
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">password</label>
                        <input type="password" placeholder='Enter Your Password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className="input_from">
                        <button
                        onClick={singupHangler}
                        >Login</button>
                    </div>
                </div>
            </form>
            <div className="or_Auth">
                <div className="text_auth">or</div>
                <div className="auth auth-Google">
                    <button className="auth-button"><FcGoogle  className="icon-auth"/> <span> Login with Google</span></button>
                </div>
                <div className="auth auth-facebook">
                    <button className="auth-button"><FaFacebook className="icon-auth"/><span> Login with Facebook</span></button>
                </div>
            </div>
            <div className="forget">
                 <Link to="/forgotPassword">Forget Password?</Link>
            </div>
            <div className="account">
                 Don't have an account? <Link to="/signUp">Register</Link>
            </div>
            <div className="error">
                <p>please fill full all the fields</p>
            </div>
        </div>
    </div>
  )
}
export default SignIn
