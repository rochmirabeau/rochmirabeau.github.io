

import React, { Component } from 'react'
import {Button, Modal, Row, Navbar, NavItem} from 'react-materialize'

class Nav extends Component {
	render() {
	return (
	<div>
	  <Row>
	<Navbar className='grey' brand='Roch Mirabeau' left>
		<div className="container">
	  <NavItem >
		<Modal header='Schedule an Appointment'
		  trigger={<Button className="blue">About Us</Button>}>
			<Form/>
		</Modal>
		
	</NavItem>
	  <NavItem ><Button className="blue">Contact Us</Button></NavItem>
	  <NavItem >
		<Modal header='6528 E Carondelet Dr, Tucson, AZ 85710'
		  trigger={<Button className="blue">Location</Button>}>
		<img src={map}/>
		</Modal>
	</NavItem>

	  <NavItem >
		<Modal header='New Patients'
		  trigger={<Button className="blue">New Patients</Button>}>
		<NewPatients/>
		</Modal>
	</NavItem>


	  <NavItem >
		<Modal header='Financing'
		  trigger={<Button className="blue">Financing</Button>}>
		<Financing/>
		</Modal>
	</NavItem>

	  <NavItem ><Button className="blue">Blog</Button></NavItem>
	  <NavItem ><Button className="blue">Announcements</Button></NavItem>


		</div>
</Navbar>
	  </Row>
	</div>
	);
	}

}

export default Nav;

