import React from 'react'
import "./Featured.scss"

const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Find the perfect <i> freelance </i> services for your business.</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./search.png" alt="" />
                            <input className="text" placeholder='Try "building mobile app" '></input>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="poular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./man.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured