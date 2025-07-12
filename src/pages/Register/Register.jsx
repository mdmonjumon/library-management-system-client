import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";
import { FaRegEye } from "react-icons/fa6";
import { GoEyeClosed } from "react-icons/go";
import UseAuth from "../../hooks/UseAuth";



const Register = () => {

    const { registerUser, updateUserProfile } = UseAuth();
    const [error, setError] = useState('')

    // for email and placeholder legend
    const [email, setEmail] = useState({
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
                                    <label className={`text-sm absolute left-3 ${email.regName ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Name</label>
                                    <input type="text"
                                        onBlur={(e) => e.target.value ? setEmail({ ...email, regName: true }) : setEmail({ ...email, regName: false })}
                                        onFocus={() => setEmail({ ...email, regName: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="name"
                                        placeholder={`${email?.regName ? '' : 'Name'}`}
                                        required />
                                </div>

                                {/* photo */}
                                <div className="relative">
                                    <label className={`text-sm absolute left-3 ${email.regPhoto ? '-top-2.5 bg-white z-20' : 'top-2.5'}`}>Photo URL</label>
                                    <input type="url"
                                        onBlur={(e) => e.target.value ? setEmail({ ...email, regPhoto: true }) : setEmail({ ...email, regPhoto: false })}
                                        onFocus={() => setEmail({ ...email, regPhoto: true })}
                                        className="input focus-within:outline-0 w-full"
                                        name="photo"
                                        placeholder={`${email?.regPhoto ? '' : 'Photo URL'}`}
                                        required />
                                </div>

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
                                        name='password'
                                        placeholder={`${email?.regPassword ? '' : 'Password'}`}
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