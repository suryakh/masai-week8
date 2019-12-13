import React from "react"
class Row5 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    img: "https://www.acko.com/static/realm/icons/LinkedIn.svg",
                    header: "LinkedIn Top Startups (2018, 2019)",
                    content: "We are regulars in LinkedIn’s list of hottest Indian startups."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/Disrupt.svg",
                    header: "Disrupt 100",
                    content: "We bagged a coveted spot in their list of disruptive startups worldwide."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/Award3.svg",
                    header: "Insurance Post’s Top Insurtech Firms",
                    content: "They ranked us 2nd among top 100 Insurtech firms globally."
                }
            ],
            data2: [
                {
                    img: "https://www.acko.com/static/realm/icons/killerPricesIm.png",
                    header: "INCREDIBLY LOW PRICES",
                    content: "Get the best price, every single time."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/convinientIm.png",
                    header: "TERRIBLY CONVENIENT",
                    content: "We leverage the best technology to make insurance effortless for you."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/stressFreeClaimsIm.png",
                    header: "ZERO-HASSLE CLAIMS",
                    content: "Just click and claim. We'll take care of everything else."
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid text-white my-5 py-5 row5">
                    <div className="container">
                        <div className="row"><div className="col"><h2>Awards & Recognition</h2></div></div>
                        <div className="row">
                            {this.state.data.map((ele) => <div className="col-lg-4 col-md-6 col-sm-12">
                                <img className="img-fluid my-5" src={ele.img}></img>
                                <h3>{ele.header}</h3>
                                <p>{ele.content}</p>
                            </div>)}
                        </div>

                    </div>
                </div>
                <div className="container my-5">
                    <div className="row py-5">
                        {this.state.data2.map((ele) => <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="img-fluid m-5" style={{ height: "50px" }} src={ele.img}></img>
                            <h3>{ele.header}</h3>
                            <p>{ele.content}</p>
                        </div>)}
                    </div>

                </div>
            </div>
        )
    }
}
export default Row5