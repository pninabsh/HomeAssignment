import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MenuComp from './MenuComp';
import Background from './beer-background.jpg';
//import BrowseBeers from './BrowseBeers';
import FavoriteBeers from './FavoriteBeers';

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
			<Switch>
				<div style={appStyle}>
					<MenuComp />
				</div>
				<Route exact path='/Favorites'>
					<FavoriteBeers />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
