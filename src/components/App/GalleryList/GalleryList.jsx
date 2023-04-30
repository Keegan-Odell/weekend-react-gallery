import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import { useState } from 'react';

function GalleryList(props) {
	return (
		<div className='ListContainer'>
			{props.imageGallery.map((image) => {
				return <GalleryItem key={image.id} image={image} />;
			})}
		</div>
	);
}

export default GalleryList;
