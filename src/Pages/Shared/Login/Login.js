import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, loading, githubLogin, providerLogin } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';
    console.log(location);
    const handleSignIn = (event) => {
        setError(null)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.result;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {

                setError(error.message);
            });



    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        setError(null)
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user); navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }
    const handleGithubSignIn = () => {
        setError(null)
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user); navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="relative">
            <img
                src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Let's start Programming with <br className="hidden md:block" />
                                <Link to='/'>Programmer</Link>

                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                If you don't have account .May you join with us.
                            </p>
                            <Link
                                to="/register"
                                aria-label=""
                                className="text-rose-400 text-3xl font-semibold"
                            >
                                Register Now
                            </Link>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Login
                                </h3>
                                <form onSubmit={handleSignIn}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="email"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                    </div>
                                    <p className='text-red-400'>{error}</p>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary p-2 rounded-lg"
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                </form> <div>
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mt-2"><FaGoogle></FaGoogle><span className='ml-2'>Login with google</span></button>

                                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary mt-2 "><FaGithub></FaGithub><span className='ml-2'>Login with github</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;