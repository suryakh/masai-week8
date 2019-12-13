import React from "react"
const values = ["https://www.acko.com/static/realm/icons/ola.png", "https://www.acko.com/static/realm/icons/amazon.png", "https://www.acko.com/static/realm/icons/oyo.png",
    "https://www.acko.com/static/realm/icons/redbus.png", "https://www.acko.com/static/realm/icons/rapido.png", "https://www.acko.com/static/realm/icons/zomato.png"]
function Row4() {
    return (
        <div className="container-fluid my-5 py-5">
            <div className="row my-5 ">
                <div className="col">
                    <h2>Acko products on your favourite apps</h2>
                </div>
            </div>
            <div className="row my-3">

                {values.map((ele) => <div className="col-lg-2 col-md-4 col-sm-12 text-center"><img className="img-fluid my-3" src={ele} /></div>)}
            </div>
        </div>
    )
}
export default Row4