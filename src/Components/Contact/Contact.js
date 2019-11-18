
import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'

import email from './email300.png'
import github from './GitHub-Mark.png'
import linkedin from './Linkedin.png'

class Contact extends Component{

  render() {
    return (
     <div className="container">
	 <Row>
	 <span className="Medium-name right">Contact Me</span>`
	 </Row>
	 <Row>
	 <Col s={12} m={3}>
	 <a href="mailto:roch.mirabeau@gmail.com">
	 <img className="icon center" src={email} alt="email" />
	 </a>
	 </Col>

	 <Col s={12} m={3}>
	 <a href="https://github.com/rochmirabeau/">
	 <img className="icon center" src={github} alt="github" />
	 </a>
	 </Col>
	 <Col s={12} m={3}>
	 <a href="https://www.linkedin.com/in/rochmirabeau/">
	 <img className="icon center" src={linkedin} alt="linkedin" />
	 </a>
	 </Col>
	 <Col s={12} m={3} className="valign-wrapper resumeCol">
	 <a href="https://drive.google.com/open?id=1lAoyMUcD17f5ZoeK8SFjIeNUOxuF6JNp">
	 <Button waves="light" className="purple" style={{marginRight: '5px'}}>
	 Resume		
	 </Button>
	 </a>
	 </Col>
	 </Row>
     </div>
    )
  }
}
export default Contact
