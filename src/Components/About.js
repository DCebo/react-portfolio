import React, { Component } from "react";

class About extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var bio = this.props.data.bio;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var email = this.props.data.email;
			var resumeDownload = this.props.data.resumedownload;
		}

		return (
			<section id="about">
				<div className="row">
					{/* <div className="three columns"></div> */}
					<h1>About Me</h1>
					<p>{bio}</p>
					<div className="nine columns main-col">
						{/* <h2>About Me</h2>

						<p>{bio}</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<p className="address">
									<span>{name}</span>
									<br />
									<span>
										{city}, {state}
									</span>
								</p>
							</div>
							<div className="columns download">
								<p>
									<a href={resumeDownload} className="button">
										<i className="fa fa-download"></i>Download Resume
									</a>
								</p>
							</div>
						</div> */}
					</div>
				</div>
				{/* <p className="scrolldown">
					<a className="smoothscroll" href="#portfolio">
						<i className="icon-down-circle"></i>
					</a>
				</p> */}
			</section>
		);
	}
}

export default About;
