

const SocialLogin = () => {
    return (
        <div>
            <div className="divider">OR</div>
            <h3 className="text-center text-lg">Login with</h3>
            <div className="flex justify-center gap-5 mt-5">
                <button className="btn btn-primary max-w-min">Google</button>
                <button className="btn btn-primary max-w-min">Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;