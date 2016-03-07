import React, { Component } from 'react';
import Job from './Job';

class JobList extends Component {
	render(){
		return (
			<div className="posts">
				<h2 className="content-subhead">Experience</h2>
				{
					this.props.jobs.map((jobData, ndx)=>{
						return <Job key={ndx} data={jobData} />
					})
				}
			</div>
		);
	}
}

export default JobList;