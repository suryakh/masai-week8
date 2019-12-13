import React from "react"
import "./Nav.css"

function Nav() {
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-lg-5 col-md-8 col-sm-12">
                            <img className="img-fluid my-2" src="https://www.acko.com/static/realm/logo.png" /></div>
                        <div className="col-lg-7 col-md-9 col-sm-12 text-lg-left text-md-center text-sm-center"><p className="m-0"><small>GENERAL INSURANCE <br></br> IRDAI Regn. No. 157 PRODUCTS</small>
                        </p></div></div></div>
                <div className="col-lg-1 col-md-7 col-sm-12"><h4 className="m-2 text-black-50">PRODUCT</h4></div>
                <div className="col-lg-7 col-md-8 col-sm-12 text-lg-left text-md-center text-sm-center"><h4 className="m-2 text-black-50">CLAIMS</h4></div>
                <div className="col-lg-1 col-md-5 col-sm-12"><h4 className="m-2 text-primary">Login</h4></div>
            </div>
        </div>
    )
}

export default Nav