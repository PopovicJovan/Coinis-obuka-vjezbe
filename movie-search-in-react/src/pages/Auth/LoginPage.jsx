
const LoginPage = () => {

    return (
        <div className={"w-100 vh-100 d-flex justify-content-center align-items-center"}>
            <button className={"btn btn-primary position-fixed top-0 start-0 ms-2 mt-2"}>
                <a href={"/"} className={"text-white text-decoration-none"}>HOME</a>
            </button>
            <div className={"d-flex justify-content-center align-items-center w-50 border-black border rounded-3 h-50"}>
                <form className={"w-50"}>
                    <div className="mb-3">
                        <label className="form-label" placeholder={"email address"}>Email address</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" placeholder={"email address"}>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                    <p className={"text-center mt-1"}><a href={"/register"}>Already have account?</a></p>
                </form>
            </div>
        </div>
    )


}

export default LoginPage;