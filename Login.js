import { Link } from "react-router-dom";
import { useState } from "react";
import ValidateLogin from "./ValidateLogin";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Validation
    const [errorMail, setErrorMail] = useState("");
    const [errorPass, setErrorPass] = useState("");

    // showing password
    const [showPassword, setShowPassword] = useState(false);


    // let ShowPassword = (e) => {
    //     if (showPassword)
    //         setShowPassword(false);
    //     else
    //         setShowPassword(true);
    // }


    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    let showStatus = (event) => {
        const { errorMail, errorPass } = ValidateLogin(email, password);

        if (email.trim() === "" || password.trim() === "") {
            setErrorMessage("Please fill all the fields");
            setErrorMail("");
            setErrorPass("");
        } else if (errorMail || errorPass) {
            setErrorMail(errorMail);
            setErrorPass(errorPass);
            document.getElementById("first_field").classList.add("md:mb-2");
            document.getElementById("first_svg").classList.replace("top-7", "top-1/4");
            setErrorMessage("");
        } else {
            setLoginSuccess(true);
            setErrorMessage("Login Successful !!!");
            setErrorMail("");
            setErrorPass("");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center md:h-auto sm:h-full w-1/2 mt-4 m-auto p-4 ">
            <form className="md:w-3/4 sm:w-auto bg-[#24252A] flex flex-col items-center justify-center sm:p-8 md:px-24 md:py-12 rounded-xl">
            <h1 className="text-center font-bold md:text-2xl text-[#e5f0f1]">Log in</h1>
                <h2 className="md:mb-12 text-center md:text-xl text-[#e5f0f1]">Enter your account details here</h2>
                <div id="first_field" className="relative z-0 w-full group">
                    <input onChange={changeEmail} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    <p className="text-sm inline-block text-red-400">{errorMail}</p>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <div>
                        <input onChange={changePassword} type={showPassword ? "text" : "password"} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label for="floating_password" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        <svg id="first_svg" className="bi bi-eye-fill absolute top-7 right-2 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e5f0f1" viewBox="0 0 16 16" onClick={() => setShowPassword(!showPassword)}>
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </div>
                    <p className="text-sm inline-block text-red-400">{errorPass}</p>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[rgba(0,136,169,1)]" required />
                    </div>
                    <label for="remember" className="ml-2 text-sm font-medium text-[#e5f0f1]">Remember me</label>
                </div>

                <button onClick={showStatus} type="button" className="form-btn text-white bg-[rgba(0,136,169,1)] hover:bg-[rgba(0,136,169,0.8)] focus:ring-4 focus:outline-none focus:ring-[rgba(0,136,169,0.8)] font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center">Login</button>

                <div id="toast-success" className={`mt-5 flex items-center w-full p-4 rounded-lg border border-gray-700 shadow text-white ${loginSuccess ? "bg-green-800" : "bg-red-800"} ${errorMessage ? "visible" : "invisible"}`} role="alert">
                    <div className="text-sm font-medium">
                        {errorMessage}
                    </div>
                </div>

                <div className="text-center mt-12 mb-6">
                    <p className="text-[#e5f0f1] text-sm"> Or Sign Up Using </p>
                    <Link to="/Unicode-Task-2/register" className="uppercase text-sky-400">Sign In</Link>
                </div>
            </form>
        </div>
    )
};