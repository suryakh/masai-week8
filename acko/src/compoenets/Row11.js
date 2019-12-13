import React from "react"

class Row11 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{
                img: "https://www.acko.com/static/realm/images/zero.svg",
                titile: "paperwork",
                content: "Looking to purchase, claim or renew? It doesn't matter."
            },
            {
                img: "https://www.acko.com/static/realm/images/one.svg",
                titile: "hour*",
                content: "Just call us and we'll pick up your damaged vehicle within the hour."
            },
            {
                img: "https://www.acko.com/static/realm/images/two.svg",
                titile: "minutes",
                content: "To get your policy document in your account."
            },
            {
                img: "https://www.acko.com/static/realm/images/three.svg",
                titile: "days**",
                content: "Get your repaired car in 3 days or we'll give you free cab vouchers!"
            }
            ]
        }
    }
    render() {
        return (
            <div className="container-fluid  py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Here's why you'll love Acko.</h1>
                        </div>
                    </div>
                    <div className="row py-5 ">
                        {this.state.data.map((ele) => <div className="col-lg-3 col-md-6 col-sm-12">
                            <img src={ele.img} />
                            <h1>{ele.titile}</h1>
                            <p>{ele.content}</p>
                        </div>)}
                    </div>
                    <div className="col">
                        <p>*In Select Cities - Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai & Pune
**Cab vouchers available in the cities mentioned above. Please refer the Terms & Conditions for more details</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Row11