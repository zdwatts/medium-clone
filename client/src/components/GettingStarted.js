import React from "react";
import "./defaultheader.css";
import signup from "./images/signup.gif";
import story from "./images/story.gif";
import commenting from "./images/commenting.gif";

const GettingStarted = ({ authenticated }) => {
	return authenticated ? (
		<div></div>
	) : (
		<div className="getting-started">
			<h1 className="start-title">Getting Started</h1>
			<div className="card-wrapper-2">
				<div className="card-1">
					<div>
						<h1 className="feature-title">Create an account.</h1>
						<p className="feature-text">
							Sign up to gain access to all of the features
							first_draft has to offer.
						</p>
					</div>
					<div className="pattern-diagonal-lines-sm gray-lighter bg-dots">
						<img
							className="sign-image"
							src={signup}
							alt="demo gifs"
						/>
					</div>
				</div>
				<div className="card-2">
					<div>
						<h1 className="feature-title">
							Begin sharing your stories.
						</h1>
							<p className="feature-text">Registered users can create stories.</p>
					</div>
					<div className="pattern-diagonal-lines-sm gray-lighter bg-dots">
						<img
							className="sign-image"
							src={story}
							alt="demo gifs"
						/>
					</div>
				</div>
				<div className="card-3">
					<div>
						<h1 className="feature-title">Share your thoughts.</h1>
							<p className="feature-text">
							Registered users have the ability to leave comments
							on stories.
						</p>
					</div>
					<div className="pattern-diagonal-lines-sm gray-lighter bg-dots">
						<img
							className="sign-image"
							src={commenting}
							alt="demo gifs"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GettingStarted;
