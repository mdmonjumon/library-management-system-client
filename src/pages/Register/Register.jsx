import { useState } from "react";


const Register = () => {
    const [email, setEmail] = useState({
        regName: false,
        regPhoto: false,
        regEmail: false,
        regPassword: false
    });

    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 min-w-sm md:min-w-md lg:min-w-lg shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-xl text-center">Lets Take Your Book</h2>
                        <h3 className="text-lg text-center">Create Your Account For Free</h3>
                        <form>
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
                                    <input type="password"
                                        onFocus={() => setEmail({ ...email, regPassword: true })}
                                        onBlur={(e) => e.target.value ? setEmail({ ...email, regPassword: true }) : setEmail({ ...email, regPassword: false })}
                                        className="input focus-within:outline-0 w-full"
                                        name="password"
                                        placeholder={`${email?.regPassword ? '' : 'Password'}`}
                                        required />
                                </div>

                                <button className="btn btn-neutral">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;