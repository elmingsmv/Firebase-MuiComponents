import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import React, { useState } from 'react'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { toast } from 'react-toastify'


const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerX = new TwitterAuthProvider();



function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            const user = res.user
            if (user) {
                toast.success('Succes Login')
                setEmail("")
                setPassword("")
                navigate("/")
            }

        } catch (error) {
            toast.error('Login or Email is wrong' + error.message)
        }

    }

    const loginWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, providerGoogle)
            const user = res.user
            if (user) {
                navigate("/")
                toast.success("Succes Login with Google")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const loginWithFacebook =async ()=>{
        try {
            const res = await signInWithPopup(auth, providerFacebook)
            const user = res.user
            if (user) {
                navigate("/")
                toast.success("Succes Login with Facebook")
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    const loginWithX =async ()=>{
        try {
            const res = await signInWithPopup(auth, providerX)
            const user = res.user
            if (user) {
                navigate("/")
                toast.success("Succes Login with X")
            }
        } catch (error) {
            toast.error(error.message)
        }
        
    }


    return (
        <div>
            <section className="gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{ borderRadius: "1rem" }}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>
                                        <form >
                                            <div data-mdb-input-init="" className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    autoComplete='email'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <label className="form-label" htmlFor="typeEmailX">
                                                    Email
                                                </label>
                                            </div>
                                            <div data-mdb-input-init="" className="form-outline form-white mb-4" >
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                    autoComplete='password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">
                                                    Password
                                                </label>
                                            </div>
                                        </form>
                                        <p className="small mb-1 pb-lg-2">
                                            <a className="text-white-50" href="#!">
                                                Forgot password?
                                            </a>
                                        </p>
                                        <button
                                            data-mdb-button-init=""
                                            data-mdb-ripple-init=""
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            onClick={login}
                                        >
                                            Login
                                        </button>
                                        <div className="d-flex justify-content-center text-center gap-3 mt-4 pt-1">
                                            <Link style={{ fontSize: "30px" }} onClick={loginWithFacebook}><i><FaSquareFacebook /></i></Link>
                                            <Link style={{ fontSize: "30px" }} onClick={loginWithX}> <i><FaXTwitter /></i></Link>
                                            <Link style={{ fontSize: "30px" }} onClick={loginWithGoogle} > <i><FaGooglePlusSquare /></i></Link>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <Link to={"/register"} className="text-white-50 fw-bold">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login