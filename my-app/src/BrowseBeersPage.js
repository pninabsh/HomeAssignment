import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function BrowseBeersPage(){
	const [beerItems, setBeerItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
    
	useEffect(() => {
		
	});

	return (
		<div>

		</div>
	);
}

export default connect()(BrowseBeersPage);