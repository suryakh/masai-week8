import React from "react"

class Row8 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{
                img: "https://www.acko.com/static/realm/icons/claimsOneHourPickup.svg",
                titile: "One Hour Pick-up*",
                content: "Call us and we’ll be there in an hour to pick up your damaged car for repairs."
            },
            {
                img: "https://www.acko.com/static/realm/icons/claimsThreeDayDelivery.svg",
                titile: "3-Day Doorstep Delivery**",
                content: "If we don’t repair and deliver your car within three days, we reimburse you with cab vouchers for your daily commute."
            },
            {
                img: "https://www.acko.com/static/realm/icons/claimsCashless.svg",
                titile: "Cashless Claims",
                content: "When we say we are cashless, we really mean we are cashless across ALL garages."
            }
            ],
            data2: [{
                img: "https://www.acko.com/static/realm/icons/claimsRegister.svg",
                titile: "You Register",
                content: "Register your claim at acko.com or call us on 1860 266 2256."
            },
            {
                img: "https://www.acko.com/static/realm/icons/claimsPickup.svg",
                titile: "We Pick Up",
                content: "We’ll pick up your car for repairs in the next 60 mins.*"
            },
            {
                img: "https://www.acko.com/static/realm/icons/claimsRelax.svg",
                titile: "You Relax",
                content: "Be stress-free as you track the repair status on our website."
            },
            {
                img: "https://www.acko.com/static/realm/icons/claimsDeliver.svg",
                titile: "We Deliver",
                content: "We’ll drop off your car repaired and ready to go in three days.*"
            }]

        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid row8 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>How Do We Make Car Insurance Claims Stress-Free?</h1>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.data.map((ele) => <div className="col-lg-4 col-md-8 col-sm-12 p-4">
                                <img src={ele.img} />
                                <h1>{ele.titile}</h1>
                                <p>{ele.content}</p>
                            </div>)}
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>*In Select Cities - Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai & Pune
**Cab vouchers available in the cities mentioned above. Please refer the Terms & Conditions for more details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col">
                            <h1>How To Claim Car Insurance?</h1>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.data2.map((ele) => <div className="col-lg-3 col-md-8 col-sm-12 py-5 my-5">
                            <img src={ele.img} />
                            <h1>{ele.titile}</h1>
                            <p>{ele.content}</p>
                        </div>)}
                    </div>
                    <div className="col">
                        <p>*In Select Cities - Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai & Pune
Please note: Previous Policy document is required in case of claim within 30 days of the Acko Policy Start Date.</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Row8