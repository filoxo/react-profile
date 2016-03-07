import React from 'react';

const Job = (props) => (
		<section className="post">
			<header className="post-header">
				<h2 className="post-title">{ props.data.title }</h2>
				<p className="post-meta">
					{ props.data.company } |&nbsp;
					{ new Date(props.data.startDate).toLocaleDateString() }&ndash;
					{ new Date(props.data.endDate).toLocaleDateString() }
				</p>
			</header>
			<div className="post-description">
				<p>{ props.data.description }</p>
			</div>
		</section>
);

export default Job;