import React, { Component } from 'react'
import {Navbar, Col, Row, Card, CardTitle} from 'react-materialize'
import eventPlanner from './eventplanner.png';
import shftr from './shftr.png';
import skilltrade from './skilltrade.png';


class Projects extends Component {
		constructor(props) {
				super(props);
				const projects = [ 
				{ title: "Event Planner",
description:  `Full Stack App \nFirebase Backend \n\nEvent Planner aims to help users find events and restaurants at their desired location during a future time, making planning simple.  Powered by the YelpAPI.  Login via Firebase allows you to save your plans for later. `,
			  link: "https://event-planner-54834.firebaseapp.com/",
			  img: eventPlanner,
				},
				{ title: "Skill Trader",
description: `Full Stack App\n MongoDB Backend\n\nHave a computer odd job you need help with?  Want to offer your phone repair skills to your city?  Skill Trader links those who can with those who need.  Search through a wide variety of skills offers or request assistance with a job and find someone in your area that can help.`,
			 link: "https://serene-oasis-24845.herokuapp.com/",
			 img: skilltrade
				},

				{ title: "SHFTR",
description: `Full Stack App \nReactJS \nSQL Backend \n\nSHFTR makes creating public initiatives easy.  If you find a pothole along your bike route, find an intersection particularly dangerous, or have a proposal you would like to share, SHFTR can help.`,
			 link: "https://serene-castle-95327.herokuapp.com/",
			 img: shftr
				},
				]
				const getProjects = function() { return projects };
						this.state = { projects }
		}

	render() {
	return (
	<div>
	 <Row>
	   <div><span className="right Medium-name">projects</span> </div>
	 </Row> 		
	  <Row>
			{this.state.projects.map((project, index) => <Col m={4} s={12} ><Card key={index} header={<CardTitle reveal image={project.img} waves='light'/>}
    title={project.title}
    reveal={<div>
				<div class="display-linebreak"> {project.description} </div>
				<p key={index}><a href={project.link}>Visit {project.title}</a></p>
			</div>}>
    <p key={index}><a href={project.link}>Visit {project.title}</a></p>
</Card> </Col>)}
		
	  </Row>
	</div>
	);
	}

}

export default Projects;

