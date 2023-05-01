import { useState } from 'react';
import './GalleryItem.css';
import axios from 'axios';

function GalleryItem(props) {
	//the state we will use to store variables for conditional rendering
	const [isFlipped, setIsFlipped] = useState(false);

	const [liked, setLiked] = useState(false);

	//this put request will send the update of likes to the server - using ID
	//the server will then calculate the likes and change the likes
	//then we update the DOM with props.getImages
	const sendLikeToServer = () => {
		axios
			.put(`/gallery/like/${props.image.id}`)
			.then((response) => {
				setLiked(true);
				props.getImages();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//when like is clickend execute our put request
	const onlikedImage = () => {
		if (liked === false) {
			sendLikeToServer();
		}
	};

	//conditional rendering for flipping the like
	const likeImage = () => {
		if (liked === false) {
			return (
				<>
					<span>{props.image.likes} </span>
					<button onClick={onlikedImage}>Like!</button>
				</>
			);
		} else {
			return (
				<>
					<span>{props.image.likes} </span>
					<button>Liked!</button>
				</>
			);
		}
	};

	//conditional rendering for flipping image
	const flipImage = () => {
		if (isFlipped === false) {
			setIsFlipped(true);
		} else {
			setIsFlipped(false);
		}
	};

	//conditional rendering once again
	const conditionallyRender = () => {
		if (isFlipped === false) {
			return (
				<img
					src={props.image.path}
					alt='decriptiveBlah'
					width='100'
					height='120'
				/>
			);
		} else {
			return <div>{props.image.description} </div>;
		}
	};

	//rendering the DOM
	return (
		<>
			<div className='itemContainer'>
				<div key={props.image.id}>
					<button className='imageButton' onClick={flipImage}>
						{conditionallyRender()}
					</button>
				</div>
				<div className='likeButtonAndCounter'></div>
				{likeImage()}
			</div>
		</>
	);
}

export default GalleryItem;
