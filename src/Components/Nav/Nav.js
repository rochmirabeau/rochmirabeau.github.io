import Projects from '../Projects/Projects.js'
import React, { Component } from 'react'
import {SideNav, SideNavItem, Row, Navbar, NavItem} from 'react-materialize'
import email from '../Contact/email300.png'
import github from '../Contact/GitHub-Mark.png'
import linkedin from '../Contact/Linkedin.png'


class Nav extends Component {
	render() {
	return (
	<div className=''>
	  <Row>
<Navbar className='grey' left>
  <NavItem >
		  <SideNav
		  trigger={<span className="Medium-name">Hi</span>} options={{ closeOnClick: true }}
		  >
		  <SideNavItem userView
			user={{
			  background: '',
			  image: '',
			  email: 'roch.mirabeau@gmail.com'
			}}
		  />
		  <SideNavItem icon=''><p>Hi I'm Roch.</p></SideNavItem>
		  <SideNavItem>Sample Projects</SideNavItem>
		  <SideNavItem divider />
{/*		  {Projects.getProjects().map((project, index) => <SideNavItem href={project.link} subheader>{project.title}</SideNavItem> )} TODO render this reactly Props and such*/}
		  <SideNavItem href='https://serene-castle-95327.herokuapp.com/' >Event Planner</SideNavItem>
		  <SideNavItem href='https://serene-oasis-24845.herokuapp.com/' >Skill Trader</SideNavItem>
		  <SideNavItem href='https://serene-castle-95327.herokuapp.com/' >SHFTR</SideNavItem>
		  <SideNavItem href='https://drive.google.com/open?id=1lAoyMUcD17f5ZoeK8SFjIeNUOxuF6JNp' waves>Grab a resume!</SideNavItem>
{/*		  <SideNavItem >Quick code examples</SideNavItem>
		  <SideNavItem divider />
		  <SideNavItem href='https://www.codewars.com/users/rochmirabeau/completed_solutions' subheader>CodeWars Kata</SideNavItem>
		  <SideNavItem href='' subheader>Daily Coding Problem</SideNavItem> */}
		  <SideNavItem divider />
		  <SideNavItem><a href="https://github.com/rochmirabeau/"><img className="icon" src={github} /> </a> </SideNavItem>
		  <SideNavItem divider />
		  <SideNavItem><a href="https://www.linkedin.com/in/rochmirabeau/"><img className="icon" src={linkedin}/> </a> </SideNavItem>
		  <SideNavItem divider />
		  <SideNavItem><a href="mailto:roch.mirabeau@gmail.com"><img className="icon" src={email} /> </a> </SideNavItem>
		</SideNav>
  </NavItem>
</Navbar>
	  </Row>
	</div>
	);
	}

}

export default Nav;

