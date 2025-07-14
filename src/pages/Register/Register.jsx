import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";
import { FaRegEye } from "react-icons/fa6";
import { GoEyeClosed } from "react-icons/go";
import UseAuth from "../../hooks/UseAuth";



const Register = () => {

    const { registerUser, updateUserProfile } = UseAuth();
    const [error, setError] = useState('')

    // for placeholder legend
    const [placeholder, setPlaceholder] = useState({
        regName: false,
        regPhoto: false,
        regEmail: false,
        regPassword: false
    });

    // state for toggle password
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { name, photo, email, password } = initialData;
        const userInfo = { displayName: name, photoURL: photo }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!regex.test(password)) {
            setError('Password must be at least 6 characters long with one uppercase, one lowercase letter and one number.')
            return

        }

        registerUser(email, password)
            .then((result) => {
                if (result?.user?.email) {
                    updateUserProfile(userInfo)
                }
                console.log(result.user)
                alert('registration success');
            })
            .catch(error => {
                console.log(error.message)
            })

    }



    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-353px)] mt-14">
            <div className="hero-content flex-col lg:flex-row-reverse mt-10">
                <div className="card bg-base-100 min-w-sm md:min-w-lg md:max-w-lg shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-xl text-center">Lets Take Your Book</h2>
                        <h3 className="text-lg text-center">Create Your Account For Free</h3>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset space-y-5">
                                {/* name */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.regName ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Name</label>
                                    <input type="text"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, regName: true }) : setPlaceholder({ ...placeholder, regName: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, regName: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="name"
                                        placeholder={`${placeholder?.regName ? '' : 'Name'}`}
                                        required />
                                </div>

                                {/* photo */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.regPhoto ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Photo URL</label>
                                    <input type="url"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, regPhoto: true }) : setPlaceholder({ ...placeholder, regPhoto: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, regPhoto: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="photo"
                                        placeholder={`${placeholder?.regPhoto ? '' : 'Photo URL'}`}
                                        required />
                                </div>

                                {/* email */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.regEmail ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Email</label>
                                    <input type="email"
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, regEmail: true }) : setPlaceholder({ ...placeholder, regEmail: false })}
                                        onFocus={() => setPlaceholder({ ...placeholder, regEmail: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="email"
                                        placeholder={`${placeholder?.regEmail ? '' : 'Email'}`}
                                        required />
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${placeholder.regPassword ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Password</label>
                                    <input type={`${showPassword ? 'text' : 'password'}`}
                                        onFocus={() => setPlaceholder({ ...placeholder, regPassword: true })}
                                        onBlur={(e) => e.target.value ? setPlaceholder({ ...placeholder, regPassword: true }) : setPlaceholder({ ...placeholder, regPassword: false })}
                                        className="input focus-within:outline-0 w-full"
                                        name='password'
                                        placeholder={`${placeholder?.regPassword ? '' : 'Password'}`}
                                        required />

                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute top-2.5 right-5 z-30">
                                        {
                                            showPassword ? <FaRegEye size='20' /> : <GoEyeClosed size='20' />
                                        }
                                    </div>

                                    {/* password validation error message */}
                                    
                                    {error && <p className="text-rose-400">{error}</p>}

                                </div>

                                <button className="btn btn-neutral">Register</button>
                            </fieldset>
                        </form>
                        <p className="text-center text-base">Already have an account? <Link to='/login' className="text-rose-500">Login</Link></p>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;