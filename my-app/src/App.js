import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MenuComp from './MenuComp';
import Background from './beer-background.jpg';
import FavoritesPage from './FavoritesPage';
import BeerDetails from './BeerDetails';
import BrowseBeersPage from './BrowseBeersPage';

const appStyle = {
	backgroundImage: `url(${Background})`,
	position: 'absolute',
	minWidth: '100%',
	minHeight: '100%',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
};

function App() {
	return (
		<Router>
			<div style={appStyle}>
				<MenuComp />
				<Route exact path='/' component={BrowseBeersPage} />					
				<Route exact path='/beer/:id' component={BeerDetails} />
				<Route exact path='/Favorites' component={FavoritesPage} />
			</div>
		</Router>
	);
}

export default App;
