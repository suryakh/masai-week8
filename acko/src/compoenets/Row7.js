import React from "react"

class Row7 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    img: "https://www.acko.com/static/realm/icons/coverage_accidents.svg",
                    header: "ACCIDENTS",
                    content: "A minor error in judgement can cause a major accident. But don't worry, we’ll take care of the damages to your car everytime."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/coverage_fire.svg",
                    header: "FIRE",
                    content: "It’s scary to see your car catch fire! But we’ll cover damages caused to your car due to the ones resulting from self-ignition, explosion and lightning."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/coverage_theft.svg",
                    header: "THEFT",
                    content: "Finding out that your car is stolen can be an absolute nightmare. But we’ll pay you your car’s Insured Value in case your car gets stolen."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/coverage_calamities.svg",
                    header: "CALAMITIES",
                    content: "Natural and man-made calamities can wreak havoc. But we’ll cover damages caused to your car because of earthquake, riots, etc."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/coverage_third_party.svg",
                    header: "THIRD-PARTY LOSSES",
                    content: "Car accidents can result in injury to, and death of any third party, while also damaging property. But we’ll cover damages related to third-party losses."
                },
                {
                    img: "https://www.acko.com/static/realm/icons/coverage_car_owner.svg",
                    header: "CAR OWNER COVER",
                    content: "We’ll cover you for death and disability caused by an accident, even if someone else was driving your car during the mishap."
                }
            ],

            data2: [{
                img: "https://www.acko.com/static/realm/icons/coverage_illegal_driving.svg",
                header: "ILLEGAL DRIVING",
                content: "If you drive without a valid driving license, or under the influence of alcohol and/or other illegal substances, you will not be covered."
            },
            {
                img: "https://www.acko.com/static/realm/icons/coverage_non_accidental_damage.svg",
                header: "NON-ACCIDENTAL DAMAGE",
                content: "Wear & tear, breakdowns, failures, and deductibles are not covered. Also consequential damages or liabilities that arise due to car accidents will unfortunately not be covered."
            },
            {
                img: "https://www.acko.com/static/realm/icons/coverage_tyres.svg",
                header: "TYRES, TUBES & ENGINE",
                content: "Damage to tyres, tubes, and engine is not covered unless they are damaged due to an accident."
            }
            ]

        }

    }
    render() {
        return (
            <div>
                <div className="container-fluid row7 ">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h1>What's Covered Under Car Insurance?</h1>
                            </div>
                        </div>
                        <div className="row my-5">
                            {this.state.data.map((ele) => <div className="col-lg-4 col-md-8 col-sm-12 my-2 p-5">
                                <div><img src={ele.img} /></div>
                                <h3>{ele.header}</h3>
                                <p>{ele.content}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="container-fluid row7_1 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>What's Not Covered Under Car Insurance?</h1>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.data2.map((ele) => <div className="col-lg-4 col-md-8 col-sm-12 my-5 py-3">
                                <div><img className="m-4 px-4" src={ele.img} /></div>
                                <h3>{ele.header}</h3>
                                <p>{ele.content}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Row7