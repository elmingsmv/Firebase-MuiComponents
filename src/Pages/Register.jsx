import React, { useState } from 'react'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase';



function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav=useNavigate()


    const createUser = async () => {

        try {

            const res = await createUserWithEmailAndPassword(auth, email, password)
            const user = res.user
            if (user) {
                toast.success("User is Creteated")
            }
            setEmail("")
            setPassword("")
            nav("/login")

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
                                        <h2 className="fw-bold mb-2 text-uppercase">Registration</h2>
                                        <p className="text-white-50 mb-3">
                                            Please enter your information!
                                        </p>
                                    
                                        <form >

                                            <div
                                                data-mdb-input-init=""
                                                className="form-outline form-white mb-4"
                                            >
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    autoComplete='email'
                                                />
                                                <label className="form-label" htmlFor="typeEmailX">
                                                    Email
                                                </label>

                                            </div>
                                          
                                            <div
                                                data-mdb-input-init=""
                                                className="form-outline form-white mb-4"
                                            >
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    autoComplete='password'
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">
                                                    Password
                                                </label>
                                            </div>
                                        </form>
                                        <button
                                            data-mdb-button-init=""
                                            data-mdb-ripple-init=""
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            onClick={createUser}
                                        >
                                            Create
                                        </button>

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

export default Register