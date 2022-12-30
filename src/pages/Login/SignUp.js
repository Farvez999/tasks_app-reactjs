import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useToken } from '../../hooks/useToken';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user, SignUp, updateUser, googleLogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');

    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    console.log(user)

    const googleProvider = new GoogleAuthProvider();

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')


        SignUp(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUserDasboard(data.name, data.email)
                    }).catch((error) => {
                        console.log(error)
                    });
                toast.success('Successfully SignUp!')
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUserDasboard = (name, email) => {
        const user = { name, email };
        fetch('https://tasks-app-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }



    const handleGoogleLogin = () => {

        // setLoader(true)
        googleLogin()
            .then((result) => {
                const user = result.user;
                saveUserDasboard(user.displayName, user.email);
                // setCreateUserEmail(user?.email);
                // setLoader(false);


            }).catch((error) => {

                const errorMessage = error.message;
                toast.error(errorMessage)
                // setLoader(false)

            });
    }


    return (
        <div className='flex justify-center items-center'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">Sign up to access your account</p>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)} novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">

                        <div>
                            <label for="name" className="block mb-2 text-sm">Name</label>
                            <input  {...register("name", { required: "Name Address is required" })} type="text" name="name" id="name" placeholder="Farvez Hossen" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 !important; background-repeat: no-repeat; background-size: 20px; background-position: 97% center; cursor: auto;" data-temp-mail-org="0" />
                            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 !important; background-repeat: no-repeat; background-size: 20px; background-position: 97% center; cursor: auto;" data-temp-mail-org="0" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" to="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input {...register("password", {
                                required: "Password Address is required", minLength: { value: 6, message: 'Passwor must be 6 characters or longer' }, pattern: {
                                    value: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/, message: "Passwor must uper & lower case letters or numbers"
                                }
                            })} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">

                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 bg-yellow-500">Sign Up</button>
                            {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            }
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account yet?
                            <Link rel="noopener noreferrer" to="/login" className="hover:underline dark:text-violet-400">Login</Link>.
                        </p>
                    </div>
                </form>
                {/* <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name Address is required" })} type="text" className="input input-bordered-2 w-full max-w-md" />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password Address is required", minLength: { value: 6, message: 'Passwor must be 6 characters or longer' }, pattern: {
                                value: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/, message: "Passwor must uper & lower case letters or numbers"
                            }
                        })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forgot Password ?</span>
                        </label>
                    </div>


                    <input className='btn btn-accent w-full text-white' value="Sign Up" type="submit" />
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                    <p>Already have an Account <Link className='text-secondary' to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form> */}
            </div>
        </div>

    );
};

export default SignUp;