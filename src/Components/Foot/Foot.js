import { Footer } from "react-materialize"
import React, { Component } from 'react'



class Foot extends Component{
		render(){
		return(
<div class='footer'>
	<Footer copyrights="2019 Roch Mirabeau"  
	  links={
	    <ul>
	      <li><a className="grey-text text-lighten-3" href="https://github.com/rochmirabeau/">Github</a></li>
	      <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/rochmirabeau/">LinkedIn</a></li>
	      <li><a className="grey-text text-lighten-3" href="mailto:roch.mirabeau@gmail.com">Email</a></li>
	      <li><a className="grey-text text-lighten-3" href="#!">Resume</a></li>
	    </ul>
	  }
	  className='example grey'
	>
	    <h5 className="white-text">Let's Connect</h5>
	    <p className="grey-text text-lighten-4">Check out some links, take a resume</p>
	</Footer>
</div>				)
				}
		}


export default Foot
