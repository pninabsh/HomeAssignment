import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination, Input, Container, Loader, Message } from 'semantic-ui-react';
import BeersGrid from './BeersGrid';

function BrowseBeersPage({updateItems}){
	const [filter, setFilter] = useState('');
	const [userInput, setUserInput] = useState('');
	const [activePage, setActivePage] = useState(1);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setError] = useState(null);
	
	useEffect(() => {
		const fetchData = () => {
			const foodFilterParam = filter == '' ? filter : `&food=${filter}`;
			return fetch(`https://api.punkapi.com/v2/beers?page=${activePage}&per_page=10${foodFilterParam}`)
				.then(data => data.json())
				.then(items => {
					updateItems(items);
					setIsLoaded(true);
				})
				.catch(error => setError(error));
		};
		fetchData();
	},[filter, activePage]);

	if(!isLoaded){
		return (
			<Loader active size='large'> Loading </Loader>
		);
	}
    
	if(isError){
		return (
			<Message style={{position: 'fixed',top:'45%', left: '40%'}} negative>
				<Message.Header>Error was received while trying to fetch the beers</Message.Header>
			</Message>
		);
	}

	return (
		<Container textAlign='center' style={{height: '100%'}}>
			<Input
				action={{
					color: 'teal',
					labelPosition: 'right',
					icon: 'search',
					content: 'search',
					onClick: () => {setFilter(userInput);}				
				}}
				label = 'Food Pairing' onChange ={(e) => setUserInput(e.target.value)}
			/>
			<BeersGrid />
			<Container style={{position: 'absolute', top: '10'}}>
				<Pagination totalPages={10} defaultActivePage={1} onPageChange={(_, data) => setActivePage(data.activePage)}/>
			</Container>
		</Container>
	);
}

const mapDispatchToProps = dispatch => ({
	updateItems: (items) => dispatch({type: 'UPDATE_ITEMS', payload: items})	
});

export default connect(null, mapDispatchToProps)(BrowseBeersPage);