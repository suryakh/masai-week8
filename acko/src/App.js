import React from 'react';
import './App.css';
import Nav from "./compoenets/nav";
import Row1 from "./compoenets/Row1";
import Row3 from "./compoenets/Row3";
import Row4 from "./compoenets/Row4";
import Row5 from "./compoenets/Row5";
import Row6 from "./compoenets/Row6";
import Row7 from "./compoenets/Row7";
import Row8 from "./compoenets/Row8";
import Row9 from './compoenets/Row9';
import Row10 from "./compoenets/Row10";
import Row11 from "./compoenets/Row11";
import Row12 from './compoenets/Row12'; // importing compenents

class R3Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        header: "Rasmit loved the killer prices",
        content: "Acko’s price was almost 50% less than other insurers for Comprehensive car insurance. Surprised!",
        img: "https://www.acko.com/static/realm/images/rasmitParida.jpg",
        subname: "Rasmit Kumar Parida",
        subtitle: "Maruti Swift Owner, Bengaluru"
      },
      {
        header: "Subha loved our seamless claims experience",
        content: "From query to delivery, Acko’s quick Turnaround Time made sure my experience was completely hassle-free!",
        img: "https://www.acko.com/static/realm/images/subhadip.png",
        subname: "Subha Dip",
        subtitle: "Nissan Owner, Bengaluru"
      }]
    }
  }
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          {this.state.data.map((ele) => <Row3 data={ele} />)}
        </div>
      </div>
    )
  }

}

function App() {
  return (
    <div className="App">
      <Nav />
      <Row1 /> 
        {/*image row*/}
      <div className="container-fluid my-2"><img className="img-fluid my-5" src="https://www.acko.com/static/realm/images/socialproofsreweb.png"></img></div> 
      <R3Data />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <div className="container-fluid questionDiv ">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-sm-12">
              <img src="https://www.acko.com/static/realm/icons/claimsInstantSettlement.svg"></img>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h1>In case of minor damages,we offer instant settlements.</h1>
              <p>Got a loose bumper, a cracked windscreen or a hanging side mirror? Get your claims settled instantly. You can then choose to go to your preferred garage, as per your convenience.</p>
            </div>
          </div>
        </div>
      </div>
      <Row9 />
      <Row10 />
      <Row11 />
      <div className="container-fluid buttonrow">
        <div className="container-fluid py-5">
          <p className="my-5" >Ready To Buy Insurance?</p>
          <h1 className="my-5">View Personalized Car Insurance Prices.</h1>
          <button className="my-5 col-2 btn btn-success p-3">VIEW PRICES</button>
        </div>
      </div>
      <Row12 />
    </div>
  );
}


export default App;
