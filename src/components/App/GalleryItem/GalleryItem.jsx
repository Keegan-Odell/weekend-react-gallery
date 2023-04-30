import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem(props) {
	const [isFlipped, setIsFlipped] = useState(false);

	const [liked, setLiked] = useState(false);

	const onlikedImage = () => {
		if (liked === false) {
			setLiked(true);
		}
	};

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
					<span>{props.image.likes + 1} </span>
					<button>Liked!</button>
				</>
			);
		}
	};

	const flipImage = () => {
		if (isFlipped === false) {
			setIsFlipped(true);
		} else {
			setIsFlipped(false);
		}
	};

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
