import React from 'react';
import { connect } from 'react-redux';
import { Pagination, Input, Container, Button } from 'semantic-ui-react';
import BeersGrid from './BeersGrid';

function BrowseBeersPage(){
	return (
		<Container textAlign='center' style={{height: '100%'}}>
			<Input placeholder='Search for food pairing...' action>
				<input />
				<Button type='submit'>Search</Button>
			</Input>
			<BeersGrid />
			<Container style={{position: 'absolute', top: '10'}}>
				<Pagination totalPages={10} defaultActivePage={1}/>
			</Container>
		</Container>
	);
}

const mapDispatchToProps = dispatch => ({
	updateFoodFiltering: (foodFiltering) => dispatch({type:'UPDATE_FOOD_PAIRING', payload: foodFiltering}),
	updateOffset: (offset) => dispatch({type: 'UPDATE_OFFSET', payload: offset})
});

export default connect(null, mapDispatchToProps)(BrowseBeersPage);