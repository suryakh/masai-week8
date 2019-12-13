import React from "react"

function Row3Div(props) {
    return(
           <div className="col-lg-6 col-md-8 col-sm-12">
           <div className="row">
               <div className="col"><img src="https://www.acko.com/static/realm/icons/starPurple.png"/>
               <img src="https://www.acko.com/static/realm/icons/starPurple.png"/>
               <img src="https://www.acko.com/static/realm/icons/starPurple.png"/>
               <img src="https://www.acko.com/static/realm/icons/starPurple.png"/>
               <img src="https://www.acko.com/static/realm/icons/starPurple.png"/></div>
           </div>
           <div className="row">
               <div className="col">
                <p className="font-weight-bold">{props.data.header}</p>
                <p>{props.data.content}</p>
                </div>
           </div>
              <div className="row">
                  <div className="col-3">
                      <img className="img-fluid rounded-circle" src={props.data.img}/>
                  </div>
                <div className="col-9 text-left">
                    <p><small className="font-weight-bold">{props.data.subname}</small></p>
                    <p><small>{props.data.subtitle}</small></p>
                </div>
              </div>
           
           </div>

    )
}
export default Row3Div