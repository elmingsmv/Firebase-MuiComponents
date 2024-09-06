import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

function Header() {
    const nav = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState(null)
    const [photo, setPhoto] = useState(null)


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsAuthenticated(true);
                setEmail(user.displayName && user.displayName ? user.displayName : user.email)
                setPhoto(user.photoURL)
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);


    const logout = async () => {
        toast.success("Checking out...")
        setTimeout(() => {
            signOut(auth)
            setEmail(null)
            setPhoto(null)
            setIsAuthenticated(false)
            nav("/login")
        }, [3000])
    }

    return (
        <div className='header '>
            <div className="container ">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo"> <Link to={"/"}>/MyLogo</Link></div>
                    </div>
                    <div className="col-md-3">
                        <div className="search"><input type="search" placeholder='Search' /></div>
                    </div>
                    <div className="col-md-6">
                        <div className="menu">
                            <ul className='d-flex gap-2'>
                                <li to="/">Home</li>
                                <li>MUI components
                                <ul className='submenu'>
                                <li><Link to={"/tab"}><div>Tab</div></Link></li>
                                <li><Link to={"/table"}><div>Table</div></Link></li>
                                <li><Link to={"/sceleton"}><div>Sceleton</div></Link></li>
                                <li><Link to={"/progres"}><div>Progres</div></Link></li>
                                <li><Link to={"/snackbar"}><div>SnackBar</div></Link></li>
                                <li><Link to={"/dialog"}><div>Dialog</div></Link></li>

                                </ul>
                                </li>
                                <li>Contact</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center gap-5">
                        {
                            isAuthenticated ?
                                <div className="loginfo">
                                    {photo ? <img src={photo} alt="" /> : null}
                                    <p >{email}</p>
                                    <Link onClick={logout}>Exit</Link>
                                </div>
                                :
                                <div className="auth">
                                    <Link to={"/login"}> <i><FaRegCircleUser /></i> </Link>
                                </div>
                        }
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Header


