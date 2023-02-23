import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"



const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, []);

    const currentUser = {
        id: 1,
        username: "Malik",
        isSeller: true

    }

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/">
            </Link> */}
                    <span className='text'>
                        fiverr
                    </span>

                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {
                        !currentUser?.isSeller &&
                        <span>Become a Seller</span>
                    }
                    <span>Sign in</span>
                    {
                        !currentUser?.isSeller &&
                        <button>Join</button>
                    }
                    {
                        currentUser && (
                            <div className="user" onClick={() => setOpen(!open)} >
                                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="" />
                                <span>{currentUser?.username}</span>
                              {open &&  <div className="options">
                                    {
                                        currentUser?.isSeller && (
                                            <>
                                                <span>Gigs</span>
                                                <span>Add new Gig</span>
                                            </>
                                        )
                                    }
                                    <span>Orders</span>
                                    <span>Messages</span>
                                    <span>Logout</span>
                                </div>}
                            </div>
                        )
                    }
                </div>
            </div>
            {active &&
                <>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar