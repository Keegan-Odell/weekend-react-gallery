import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './header/Header';
import GalleryList from './GalleryList/GalleryList';

function App() {
	//setting our state for saving our image gallery
	let [imageGallery, setImageGallery] = useState([]);

	useEffect(() => {
		//executes getImages when the webpage loads
		getImages();
	}, []);

	const getImages = () => {
		axios
		//gets the data from gallary and stores it in the setImageGallery
			.get('/gallery')
			.then((response) => {
				console.log(response.data);
				setImageGallery(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//what is on the dom
	return (
		<div className='App'>
			<Header />
			<p>Favorite Movies & A Goat</p>
			<GalleryList imageGallery={imageGallery} getImages ={getImages}/>
		</div>
	);
}

export default App;
