import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination, Input, Container, Loader, Message, Button, Confirm } from 'semantic-ui-react';
import BeersGrid from './BeersGrid';

function BrowseBeersPage({updateItems, isFavoritesPage, updateOffset, offset, ResetFavorites}){
	const [filter, setFilter] = useState('');
	const [open, setOpen] = useState(false);
	const [userInput, setUserInput] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setError] = useState(null);
	
	const onConfirm = () => {
		ResetFavorites();
		setOpen(false);
	};

	useEffect(() => {
		const fetchData = () => {
			const foodFilterParam = filter == '' ? filter : `&food=${filter}`;
			return fetch(`https://api.punkapi.com/v2/beers?page=${offset}&per_page=10${foodFilterParam}`)
				.then(data => data.json())
				.then(items => {
					updateItems(items);
					setIsLoaded(true);
				})
				.catch(error => setError(error));
		};
		fetchData();
	},[filter, offset]);

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
		<Container textAlign='center'>
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
			<Button content='Reset Fvaorites' onClick={() => setOpen(true)}/>
			<Confirm
				open={open}
				onCancel = {() => setOpen(false)}
				onConfirm = {() => onConfirm()}
			/>
			<BeersGrid isFavoritesPage={isFavoritesPage}/>
			<Container style={{position: 'absolute', top: '10'}}>
				<Pagination totalPages={10} defaultActivePage={1} onPageChange={(_, data) => updateOffset(data.activePage)}/>
			</Container>
		</Container>
	);
}

const mapStateToProps = (state) => {
	const { offset } = state;
	return { offset };
};

const mapDispatchToProps = dispatch => ({
	updateOffset: (offset) => dispatch({type: 'UPDATE_OFFSET', payload: offset}),
	updateItems: (items) => dispatch({type: 'UPDATE_ITEMS', payload: items}),
	ResetFavorites: () => dispatch({type:'RESET_FAVORITES'})	
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseBeersPage);