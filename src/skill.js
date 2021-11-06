import React from 'react'

const Skill = () => {
    return (

        <section className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ">
                        <h1 className="header">
                            Skills
                        </h1>
                        <p className="para-3"> A lead Web developer based in Pakistan, Lahore </p>
                        <div>
                            <h6> React</h6>
                            <div className="progress" style={{ height : "8px"}}>
                                <div className="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#D9832E" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h6> HTML</h6>
                            <div className="progress " style={{ height : "8px"}}>
                                <div className="progress-bar" role="progressbar" style={{ width: "75%", backgroundColor: "#D9832E" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h6>CSS</h6>
                            <div className="progress" style={{ height : "8px"}}>
                                <div className="progress-bar" role="progressbar" style={{ width: "55%", backgroundColor: "#D9832E" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h6> JS</h6>
                            <div className="progress" style={{ height : "8px"}}> 
                                <div className="progress-bar" role="progressbar" style={{ width: "45%",backgroundColor: "#D9832E" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">45%</div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6 col-skills-2">
                        <div className="row">


                            <div class="col-md-6 ">
                                <div class="content-features">
                                    <h3>Email marketing expert</h3>
                                </div>
                            </div>

                            <div class="col-md-6 ">
                                <div class="content-features">
                                    <h3>80 websites designs</h3>
                                </div>
                            </div>

                            <div class="col-md-6 ">
                                <div class="content-features">
                                    <h3>100 cups of coffee </h3>
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <div class="content-features">
                                    <h3>10 awards winning </h3>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div>
        </section>
    )
}

export default Skill
