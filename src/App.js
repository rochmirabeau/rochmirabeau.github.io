import React, { Component } from "react";
import "./App.css"
import Projects from './Components/Projects/Projects.js' 
import About from './Components/About/About.js' 
import Codingproblems from './Components/Codingproblems/Codingproblems.js' 
import Contact from './Components/Contact/Contact.js' 
import Nav from './Components/Nav/Nav.js'
import Foot from './Components/Foot/Foot.js'
import {Row} from 'react-materialize'
import Background from './Components/Background/Background.jpeg'


const sectionStyle = {
		
	//	backgroundImage: `url(${Background})` ,
}
		
class App extends Component {



  render() {
    return (
      <div className="" style={ sectionStyle }>
  	  <Row>
  	  <div className="right"> 
  	  <span class="Purple-text Large-name waves">R</span>
  	  <span class="Medium-name Purple-text">och</span>
  	  <span class="Medium-name Green-text"></span>
	  <span class="Purple-text Large-name"></span>
	  <span class="Green-text Large-name">M</span>
  	  <span class="Medium-name Green-text">irabeau</span>
  	  <span class="Medium-name Green-text"></span>
  	  </div>
  	  </Row>
	    <Row>
        	<Nav/>
	    </Row>

		<div className="container">
		<Row className="curvyborder">

		<About /> 
		</Row>
		</div>
		<div className=''>
	      <Row>
            <div class="container" >
	
		  	<Projects />

            </div>
		  </Row>
		  </div>
		  <Row>
		  {/*
				  <div>
						  <Codingproblems />
						  </div>
		  */}
		  </Row>
		  <Row>
		  <div>
		  <Contact />
		  </div>
		  </Row>
      </div>
    );
  }
}

export default App;
