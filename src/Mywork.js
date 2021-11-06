import React from 'react'

const Mywork = () => {
    return (

        <div className="container col-about-1">
            <h1 className="header">
                Latest Works
            </h1>
            <p className="para-3"> A lead Web developer based in Pakistan, Lahore </p>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <img className="img-2" src="/app2.png" />
                </div>
                <div className="col-lg-4 col-sm-6">  
                   <img className="img-2" src="/app.png" />
                </div>
                <div className="col-lg-4 col-sm-6">
                <img className="img-2" src="/web2.png"/>

                </div>
                <div className="col-lg-4 col-sm-6">
                <img className="img-2" src="/web.jpg"/>

                </div>
                <div className="col-lg-4 col-sm-6">
                <img className="img-2" src="/ui2.png"/>

                </div>
                <div className="col-lg-4 col-sm-6">
                <img className="img-2" src="/ui3.png"/>

                </div>


            </div>

        </div>
    )
}

export default Mywork
