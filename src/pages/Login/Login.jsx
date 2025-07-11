import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";
import { FaRegEye } from "react-icons/fa6";
import { GoEyeClosed } from "react-icons/go";

const Login = () => {

    const [email, setEmail] = useState({
        regName: false,
        regPhoto: false,
        regEmail: false,
        regPassword: false
    });

    const [showPassword, setShowPassword] = useState(false)


    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-353px)] mt-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 min-w-sm md:min-w-md lg:min-w-lg shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-xl text-center">Lets Take Your Book</h2>
                        <h3 className="text-lg text-center">Login Now!</h3>
                        <form>
                            <fieldset className="fieldset space-y-5">
                                {/* email */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${email.regEmail ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Email</label>
                                    <input type="email"
                                        onBlur={(e) => e.target.value ? setEmail({ ...email, regEmail: true }) : setEmail({ ...email, regEmail: false })}
                                        onFocus={() => setEmail({ ...email, regEmail: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="email"
                                        placeholder={`${email?.regEmail ? '' : 'Email'}`}
                                        required />
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${email.regPassword ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Password</label>
                                    <input type={`${showPassword ? 'text' : 'password'}`}
                                        onFocus={() => setEmail({ ...email, regPassword: true })}
                                        onBlur={(e) => e.target.value ? setEmail({ ...email, regPassword: true }) : setEmail({ ...email, regPassword: false })}
                                        className="input focus-within:outline-0 w-full"
                                        name="password"
                                        placeholder={`${email?.regPassword ? '' : 'Password'}`}
                                        required />

                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute top-2.5 right-5 z-30">
                                        {
                                            showPassword ? <FaRegEye size='20' /> : <GoEyeClosed size='20' />
                                        }
                                    </div>
                                </div>

                                <button className="btn btn-neutral">Login</button>
                            </fieldset>
                        </form>
                        <p className="text-center text-base">Don't have an account? <Link to='/register' className="text-rose-500">Register</Link></p>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;