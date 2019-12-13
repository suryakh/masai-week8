import React from "react"

class Row12 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{
                title: "COMPANY",
                list: ["About us", "Board Of Directors", "Careers", "Media Kit", "Articles", "Partnerships", "Sitemap"]
            },
            {
                title: "SUPPORT",
                list: ["SUPPORTConsumer Buying Process", "Cancellations & Refunds", "Customer Service", "Downloads", "Contact Us", "Unclaimed Amount"]
            },
            {
                title: "LEGAL",
                list: ["LEGALWhistleblower Policy", "Public Disclosure", "Financials & Disclosures", "Privacy Policy", "Terms & Conditions", "Stewardship Code", "Disclaimer"]
            }
            ],
            data2: [{
                title: "General",
                list: ["Insurance Sector In India", "Types Of Insurance", "Indian Motor Vehicles Act 2017", "About Your Vehicle Number Plate", "Things To Know About PUC Certificate", "Vehicle Registration & Re-Registration", "Intro To Road Tax In Uttar Pradesh"]

            },
            {
                title: "Car Insurance",
                list: ["Motor Insurance", "Car Insurance Comparison", "Third Party vs Comprehensive", "Car Insurance Premium Calculator", "IDV in Car Insurance", "Car Insurance Claims", "Car Claim and Claim settlement ratio", "Car Insurance: Add-on Covers"]
            },
            {
                title: "Two-Wheeler Insurance",
                list: ["Two wheeler Insurance Comparison", "Third Party vs Comprehensive", "IDV in Bike Insurance", "Bike Insurance Premium Calculator", "Two Wheeler Insurance Claims", "Two Wheeler Claim Settlement Ratio", "Two Wheeler Insurance: Add-on Covers"]
            },
            ]

        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid text-white row12 py-5">
                    <div className="row">
                        <div className="col-3">
                            <img className="img-fluid my-2" src="https://www.acko.com/static/realm/logo.png" />
                            <p>Acko General Insurance Ltd.</p>
                            <small>Unit No. 301, 3rd Floor, E wing, Lotus Corporate Park, Off Western Express Highway, Jay Coach, Goregaon East, Mumbai 400063.</small>
                            <small>Email: hello@acko.com</small>
                            <small>Phone: 1860 266 2256</small>
                        </div>
                        {this.state.data.map((ele) => <div className="col-lg-3 col-md-6 col-sm-12"><div className="row px-4 font-weight-bold">{ele.title}</div>
                            <div className="col text-left">{ele.list.map((a) => <li>{a}</li>)}</div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="container-fluid text-white row13 py-5">
                    <div className="row">
                        <div></div>
                        <div className="col-3 text-left px-4">
                            <p>We’re Socially Active</p>
                            <div className="row ">
                                <img className="img-fluid" src="https://www.acko.com/static/realm/icons/facebookFooterIcon.svg" />
                                <img className="img-fluid" src="https://www.acko.com/static/realm/icons/twitterFooterIcon.svg" />
                                <img className="img-fluid" src="https://www.acko.com/static/realm/icons/instagramFooterIcon.svg" />
                                <img className="img-fluid" src="https://www.acko.com/static/realm/icons/youtubeFooterIcon.svg" />
                                <img className="img-fluid" src="https://www.acko.com/static/realm/icons/linkedinFooterIcon.svg" />
                            </div>
                        </div>
                        {this.state.data2.map((ele) => <div className="col-lg-3 col-md-6 col-sm-12"><div className="row px-4 font-weight-bold">{ele.title}</div>
                            <div className="col text-left">{ele.list.map((a) => <li>{a}</li>)}</div>
                        </div>
                        )}
                    </div>
                </div>





            </div>
        )
    }
}
export default Row12