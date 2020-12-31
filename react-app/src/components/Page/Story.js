import React, { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Story.css";
import {
  faComments,
  faHeart,
  faSignLanguage,
} from "@fortawesome/free-solid-svg-icons";

function Story({ authenticate }) {
	const [story, setStory] = useState([]);
	const [author, setAuthor] = useState([]);
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [currentUser, setCurrentUser] = useState("");
	const [totalLikes, setTotalLikes] = useState(0);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const data = await axios.get(`/api/stories/${id}`);
			data.data.story.length > 0 && setStory(data.data.story[0]);
			data.data.story.length > 0 &&
				setAuthor(data.data.author[0].username);
			data.data.comments.length > 0 && setComments(data.data.comments);

			const response = await authenticate();
			const loggedUser = response.username;
			setCurrentUser(loggedUser);
			setTotalLikes(data.data.total_likes);
		})();
	}, [authenticate, id]);

	const toggleComment = () => {
		setShowComments(!showComments);
		const hideMe = () => {
			let text = document.getElementById("comment-cta")
			text.classList.toggle("hide")
		}

		hideMe()
	};

	const handleLike = async () => {
		await fetch(`/api/stories/${id}/like`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: currentUser,
			}),
		});
		const likeData = await axios.get(`/api/stories/${id}`);
		setTotalLikes(likeData.data.total_likes);
	};

	return (
    <Container className="story-container pattern-diagonal-lines-md">
      <Inner className="story-div animate__animated animate__backInDown">
        <h1 className="story-page-title">{story.title}</h1>
        <p className="story-page-author">
          Written By: <span className="author-name">{author}</span>
        </p>
        {/* <div>{story.body}</div> */}
        <div className="story-body">{story.body && parse(story.body)}</div>
        <div className="like-wrapper">
          <div>
            <i
              className="fas fa-sign-language fa-2x clap-icon"
              onClick={handleLike}
            ></i>{" "}
            <span className="like-text">Claps </span>
            <span className="total-text">{totalLikes}</span>
            <i
              className="fas fa-comments fa-2x comment-icon"
              onClick={toggleComment}
            ></i>{" "}
            <span className="total-text">Replies {comments.length}</span>
          </div>
        </div>
        <span onClick={toggleComment} className="like-text" id="comment-cta">
          Leave a comment . . .
        </span>

        {showComments && (
          <>
            <Comment comments={comments} currentUser={currentUser} />
            <CreateComment
              author={author}
              storyId={id}
              setComments={setComments}
              currentUser={currentUser}
            />
          </>
        )}
      </Inner>
    </Container>
  );
}

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	box-sizing: border-box;
	width: 44em;

	div {
		padding: 1em;
	}
`;

export default Story;
