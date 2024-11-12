import { Link, useNavigate } from "react-router-dom"




const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="h-[50vh] bg-[#965fdc] border">
            </section>
            <section id="Login_page" className="-mt-52">
                <h1 className="text-center text-2xl md:text-5xl text-[#6bdc5f]" id="pacifico">Employee Management System</h1>
                <div id="Login_card" className="mx-3 p-5 md:w-3/6 xl:w-2/6 mt-10 bg-white md:mx-auto shadow-xl">
                    <h2 className="text-center text-3xl font-bold text-gray-500 mb-10">Login</h2>
                    <label>
                        Email :
                        <input type="email" name="email" placeholder="Type Your Email" className="block border w-full mb-10 text-black p-2" />
                    </label>
                    <label>
                        Password :
                        <input type="password" name="password" placeholder="Type Your Password" className="block border w-full mb-10 text-black p-2" />
                    </label>
                    <div className="w-full text-end">
                        <Link to={""} className="link link-hover text-[#57d1b1] font-semibold">Forgot password?</Link>
                    </div>
                    <section className="text-center">
                        <Link to={'/user'}>
                            <input type="submit" value="Login" className="border p-2 px-10 bg-[#5f72dc] text-white font-bold rounded-md shadow-2xl btn btn-outline" />
                        </Link>
                    </section>
                </div>
            </section>
        </>
    )
}
export default Login