import { useState } from 'react';

function GalleryItem(props) {
	const [isFlipped, setIsFlipped] = useState(false);

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
					height='100'
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
					<button onClick={flipImage}>{conditionallyRender()}</button>
				</div>
				<div className='likeButtonAndCounter'>
					<span>{props.image.likes} </span>
					<button>Like!</button>
				</div>
			</div>
		</>
	);
}

export default GalleryItem;
