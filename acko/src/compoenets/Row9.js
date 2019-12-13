import React from "react"

class Row9 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ["Why buy car insurance offered by Acko?", "How are Acko prices so low?", "I already have an existing car insurance policy. Can I still buy Acko car Insurance?", "If I am not an Amazon customer, can I purchase Acko car Insurance?", "How do I raise a claim when I need to? What information should I provide?", "Do you offer Zero Depreciation and other add-ons?", "I have more questions. How do I contact Acko?"]
        }
    }
    render() {
        return (
            <div className="questionDiv">
            <div className="container py-5">
                <div className="row"> 
                <div className="col text-center">
                <p className="display-4">Frequently Asked Questions</p> </div> </div>
                {this.state.data.map((ele)=><div className="text-left questions p-1"><h2>{ele}</h2></div>)}

            </div>
            </div>
        )
    }
}
export default Row9