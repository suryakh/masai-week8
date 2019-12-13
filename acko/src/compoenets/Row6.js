import React from "react"
class Row7 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:
            {
                img: "https://www.acko.com/static/realm/images/Homepage_Killer_Prices.svg",
                intro: "INCREDIBLY LOW PRICES",
                header: "Prices That Can’t Get Any Better.",
                content: "We spend a lot less on running an insurance company when you buy directly from us. We simply pass on the savings to you. Also, by creating a community of great drivers who take care of their cars, we ensure that your premiums decrease generously. So just sit back, as we blow your mind off with our amazing deals"
            },
            data2: {
                img: "https://www.acko.com/static/realm/images/Homepage_Terribly_Convenient.svg",
                intro: "TERRIBLY CONVENIENT",
                header: "One Tap To Do It All.",
                content: "We hate paperwork as much as you do. That’s why we help you deal with insurance instantly, simply at the tap of a button. Whether it’s purchase, support, claims, or renewal, our support team is always here for you."
            },
            data3:
            {
                img: "https://www.acko.com/static/realm/images/Homepage_Stress_Free_Claims.svg",
                intro: "ZERO-HASSLE CLAIMS",
                header: "Throw Stress Out Of The Window.",
                content: "Our claims are so stress-free, it’s like taking an afternoon nap. Just give us a call and we’ll take care of everything - from picking up your car, to getting it repaired and dropping it back right at your doorstep."
            }
        }
    }
    render() {
        return (
            <div className="container my-5">
                <div className="container my-5">
                    <div className="row my-5 py-5">
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <img src={this.state.data.img}></img>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 text-lg-left text-md-center text-sm-center">
                            <p>{this.state.data.intro}</p>
                            <h1>{this.state.data.header}</h1>
                            <small>{this.state.data.content}</small>
                        </div>
                    </div>
                    <div className="row my-5 py-5">
                        <div className="col-lg-7 col-md-7 col-sm-12 order-sm-1 order-md-1 order-lg-0 text-lg-right text-md-center text-sm-center">
                            <p>{this.state.data2.intro}</p>
                            <h1>{this.state.data2.header}</h1>
                            <small>{this.state.data2.content}</small>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12 ">
                            <img src={this.state.data2.img}></img>
                        </div>
                    </div>
                    <div className="row my-5 py-5">
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <img src={this.state.data3.img}></img>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 text-lg-left text-md-center text-sm-center">
                            <p>{this.state.data3.intro}</p>
                            <h1>{this.state.data3.header}</h1>
                            <small>{this.state.data3.content}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Row7