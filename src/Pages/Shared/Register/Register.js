import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, AuthContext } from '../../../Context/Authprovider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL);
        createUser(email, password).then(() => {
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoURL
            }).catch(err => console.log(err))

        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <h2 className='text-2xl'>Let's start programming wiht programmer .</h2>
                    <Link className='text-xl text-rose-400' to='/login'>Have an Acount</Link>
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;