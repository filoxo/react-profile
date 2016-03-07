import React, { Component } from 'react';
import JobList from './Joblist';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { joblist: props.initialJoblist };
	}
	render(){
		return (
			<div id="layout" className="pure-g">
				<div className="sidebar pure-u-1 pure-u-md-1-4">
					<div className="header">
						<h1 className="brand-title">Carlos Filoteo</h1>
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
					<JobList jobs={ this.state.joblist }/>
				</div>
			</div>
		);
	}
}

App.defaultProps = { initialJoblist: [
		{
			title: 'Front-end Developer',
			company: 'Company, Inc.',
			startDate: 1457257932592,
			endDate: 1457257932592,
			description: 'lorem ipsum bacon yumyum'
		}
	]
};

export default App;