import { useNavigate } from "react-router-dom";
import SweetAlert from "../../components/shared/SweetAlert";
import UseAuth from "../../hooks/UseAuth";


const SocialLogin = () => {
    const { signInWithGoogle } = UseAuth();
    const navigate = useNavigate();

    const googleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                SweetAlert('success', 'Login Successful')
                navigate('/')
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <h3 className="text-center text-lg">Login with</h3>
            <div className="flex justify-center gap-5 mt-5">
                <button onClick={googleSignIn} className="btn btn-primary max-w-min">Google</button>
                <button className="btn btn-primary max-w-min">Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;