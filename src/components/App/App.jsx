import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './header/Header';
import GalleryList from './GalleryList/GalleryList';

function App() {
	let [imageGallery, setImageGallery] = useState([]);

	useEffect(() => {
		getImages();
	}, []);

	const getImages = () => {
		axios
			.get('/gallery')
			.then((response) => {
				console.log(response.data);
				setImageGallery(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='App'>
			<Header />
			<p>Favorite Movies & A Goat</p>
			<GalleryList imageGallery={imageGallery} />
		</div>
	);
}

export default App;
