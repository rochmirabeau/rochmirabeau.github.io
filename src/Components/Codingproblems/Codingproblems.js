import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'react-materialize'

class Codingproblems extends Component{

  render() {
    return (
     <div className="container">
	 <Row>
	 <span className="Medium-name right">Coding Problems</span>`
	 </Row>
<Row>
<Col m={6} s={12}>
<Card
  className="blue-grey darken-1"
  textClassName="white-text"
  title="Code Wars"
  actions={[<a />,<a />]}
>
Check out some codewars walkthroughs.
</Card>
</Col>
<Col m={6} s={12}>
<Card
  className="blue-grey darken-1"
  textClassName="white-text"
  title="Leet Code"
  actions={[<a />,<a />]}
>
Check out some LeetCode walkthroughs.
</Card>
</Col>
</Row>
     </div>
    )
  }
}

export default Codingproblems
