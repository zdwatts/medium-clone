import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Card.css";

const MostRecent = () => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/`);
			setStories(data.data.stories.reverse());
		})();
	}, []);

	console.log("STORIES:", stories);

	return (
		<div className="most-recent-div">
			{stories.map((story) => {
				return <h1>{story.title}</h1>;
			})}
		</div>
	);
};

export default MostRecent;