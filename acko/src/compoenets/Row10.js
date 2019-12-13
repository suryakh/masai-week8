import React from "react"
class Row10 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{
                title: "Aiming to unbundle insurance",
                img: "https://www.acko.com/static/realm/icons/olaTechCrunch.png"
            },
            {
                title: "Country's first fully digital insurer",
                img: "https://www.acko.com/static/realm/icons/olaYourStory.png"
            },
            {
                title: "Customised products & prices differantation",
                img: "https://www.acko.com/static/realm/icons/olaLiveMint.png"
            },
            {
                title: "Making insurance straingthforward",
                img: "https://www.acko.com/static/realm/icons/olaTheHindu.png"
            }]

        }
    }
    render() {
        return (
            <div className="row my-5 py-5 rounded-pill mx-5 row10">
                {this.state.data.map((ele) => <div className="col-lg-3 col-md-6 col-sm-12">
                    <p>{ele.title}</p>
                    <img src={ele.img} />
                </div>
                )}
            </div>
        )
    }
}
export default Row10