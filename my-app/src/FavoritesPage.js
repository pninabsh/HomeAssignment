import React from 'react';
import BrowseBeersPage from './BrowseBeersPage';

function FavoritesPage(){
	return(
		<BrowseBeersPage isFavoritesPage={true} />
	);
}

export default FavoritesPage;