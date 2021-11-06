import React from 'react'

const About = () => {
    return (

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-about-1">
                        <h1 className="header">
                            ABOUT ME
                        </h1>
                        <p className="para-3"> A lead Web developer based in Pakistan, Lahore </p>
                        <img className="img-1" src="/img1.jpg" />
                    </div>
                    <div className="col-lg-6 col-about-2">
                        <h2>I'm Asad Naseem</h2>
                        <h3>A <span className="des">Web developer </span>and <span className="des">front-end engineer</span> living and working in Lahore, Pakistan</h3>
                        <p className="para-4">I'm passionate about creating and developing clean, unique, elegant products. I specialize in building Websites for small to medium size business. I keep my code clean, readable, modular and well refactored. I enjoy working with complex user interfaces</p>

                        <div className="row row-pres">
                            <div className="col-lg-6  ">
                                <pre>Birthday  | 19th july 2000</pre>
                                <pre>Age       | 21 years</pre>
                                <pre>Residence | Pakistan</pre>
                                <pre>Address   | Lahore</pre>




                            </div>
                            <div className="col-lg-6  ">
                                <pre>E-mail    | creatively262@gmail.com</pre>
                                <pre>Phone     | 03349375094</pre>
                                <pre>Freelance | Available</pre>

                            </div>
                        </div>


                        <button className="btn btn-1 "  >Download CV </button>


                    </div>



                </div>
            </div>
        </section>
    )
}

export default About
