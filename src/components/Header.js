
import React from 'react'


const Header = () => {



    return (
        <section className="aboutme">
            <div className="container-fluid ">
                <div className="row">
                    <div className=" col-lg-6  col-sm-12 ">
                        <p className="para">Hello there. . .</p>
                        <h1 className="banner-h">
                            ASAD NASEEM
                        </h1>
                        <p className="para-2">I Am Passionate <span className="deve"> Developer |</span></p>
                        <p className="para-3">The namics of how  users interact with interactive elements within a users
                            interface flowchart based on container proportion</p>
                        <button className="btn btn-1">MY WORK</button>
                        <button className="btn btn-2">HIRE ME</button>
                    </div>
                    <div className=" column col-lg-6 col-sm-0">
                        <img className="img-1" src="/images.jpg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
