import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import { useState } from 'react';
import './GalleyList.css';

function GalleryList(props) {
	return (
		<div className='ListContainer'>
			{props.imageGallery.map((image) => {
				return (
					<GalleryItem
						key={image.id}
						image={image}
						getImages={props.getImages}
					/>
				);
			})}
		</div>
	);
}

export default GalleryList;
