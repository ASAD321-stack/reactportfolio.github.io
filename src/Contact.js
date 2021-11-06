import React from 'react'

const Contact = () => {
    return (
        <section>
            <div className="container ">
                <h1 className="header">
                    Contact Us
                </h1>
                <p className="para-3"> A lead Web developer based in Pakistan, Lahore </p>
                <div className="row">
                    <div className="col-lg-8">



                        <div class="contact-form">
                            <div class="row">
                                <div class="contact-text">
                                    <h2>Drop Me message</h2>
                                </div>
                            </div>
                            <div class="row space-between">
                                <div class="col-lg-6">
                                    <input type="text" class="form-control" name="" placeholder="Name" required />
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" class="form-control" name="" placeholder="Email" required />
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <input type="text" class="form-control" name="" placeholder="Subject" required />
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-12">
                                    <textarea class="form-control" placeholder="Your Message" required></textarea>
                                </div>
                            </div>

                            <button class=" btn btn-1"   >
                                <a>Contact Me</a>
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12  col-xs-12">
                    <div class="box-2">
                        <div class="icon"><i class="fa fa-code"></i></div>
                        <h5>Our Address</h5>
                        <p> Pakistan </p>
                        <p>Lahore</p>
                    </div>
                    <div class="box-2">
                        <div class="icon"><i class="fa fa-code"></i></div>
                        <h5>Our Phone</h5>
                        <p> 033-49375094</p>
                        <p> 034678788725</p>

                    </div>
                    <div class="box-2">
                        <div class="icon"><i class="fa fa-code"></i></div>
                        <h5>Our Email</h5>
                        <p>creatively262@gmail.com  </p>
                        <p>asadnaseem4@gmail.com </p>

                    </div>
                </div>


                </div>

                
            </div>


        </section>
    )
}

export default Contact
