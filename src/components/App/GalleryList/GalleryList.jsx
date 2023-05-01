import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import { useState } from 'react';
import './GalleyList.css';

//uses map function to loop over the images in our data sent in as props
//then renders these images onto the dom
//it also sends props to the GalleryItem component
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
