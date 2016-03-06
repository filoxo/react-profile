import React, { Component } from 'react';
import JobList from './Joblist';

class App extends Component {
	render(){
		return (
			<div id="layout" className="pure-g">
				<div className="sidebar pure-u-1 pure-u-md-1-4">
					<div className="header">
						<h1 className="brand-title">Name Goeshere</h1>
						<h2 className="brand-tagline">Web Developer</h2>
						<nav className="nav">
							<ul className="nav-list">
								<li className="nav-item">
									<a className="pure-button" href="//github.com">Github</a>
								</li>
								<li className="nav-item">
									<a className="pure-button" href="//linkedin.com">LinkedIn</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="content pure-u-1 pure-u-md-3-4">
					<JobList/>
				</div>
			</div>
		);
	}
}

export default App;