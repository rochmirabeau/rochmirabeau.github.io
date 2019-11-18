
import React, { Component } from 'react'
import { Row } from 'react-materialize'


const blurb = `Hi, I'm Roch.\nI like to build things, softwareically speaking. \nI'm currently tinkering with ReactJS, Javascript, Java, and a litany of other languages.\nProblem solving, communication, comedy, and code are my fortes. \nPoke around, grab a resume, let's talk.
 `

class About extends Component{

  render() {
    return (
     <div>
	 <Row>
	 <span className="Medium-name right">About Me</span>`
	 </Row>
	 <Row>
	 <p className="display-linebreak blurb center">{blurb}</p>
	 </Row>
	 </div>
    )
  }
}

export default About
