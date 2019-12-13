import React from "react"

function Row1() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <img src="https://www.acko.com/static/realm/images/worldcupBanner.png" />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="row my-2">
                        <div className="col-2 rounded-pill bg-warning">CAR</div>
                        <div className="col-2 text-warning">BIKE</div>
                    </div>
                    <div className="row my-2">
                        <div><h4>The no-brainer choice for car & bike insurance</h4>
                            <p>Secure your car instantly at insanely low premiums.</p>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col p-3">
                            <input className="rounded-pill p-2 border shadow p-3 mb-5 bg-white rounded" placeholder="Your Car Number" />
                            <button className="rounded-pill p-2 mx-4 row2Btn shadow p-3 mb-5 rounded text-white col-3">View Price</button>
                        </div>
                    </div>
                    <div className="row my-2 text-primary mx-2"><p>Proceed without car number ></p></div>
                    <div className="row bg-light mx-2"><p>Already bought an Acko policy? Renew Now</p></div>
                </div>
            </div>

        </div>
    )
}
export default Row1 