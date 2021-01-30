import React, { useState, useEffect } from 'react';
import { Segment, Container, Header, Icon, Table, 
	List,Loader, Message } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

function BeerDetails(){
	const [isError, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [beerItem, setItem] = useState(null);
	const { id } = useParams();
    
	useEffect(() => {
		const fetchData = () => {
			return fetch(`https://api.punkapi.com/v2/beers/${id}`)
				.then(data => data.json())
				.then(item => {
					setItem(item);
					setIsLoaded(true);
				})
				.catch(error => setError(error));
		};
		fetchData();
	},[id]);
    
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
		<Container>
			<Segment inverted>
				{beerItem && (
					<Header>
						{beerItem[0].name} Beer
						<Icon name='bar' />
					</Header>
				)}
				<Table inverted celled compact columns='7'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Tagline</Table.HeaderCell>
							<Table.HeaderCell>First Brewed</Table.HeaderCell>
							<Table.HeaderCell>Description</Table.HeaderCell>
							<Table.HeaderCell>food Pairing</Table.HeaderCell>
							<Table.HeaderCell>Brewers Tips</Table.HeaderCell>
							<Table.HeaderCell>Contributed By</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row key={beerItem[0].id}>
							<Table.Cell>{beerItem[0].name}</Table.Cell>
							<Table.Cell>{beerItem[0].tagline}</Table.Cell>
							<Table.Cell>{beerItem[0].first_brewed}</Table.Cell>
							<Table.Cell>{beerItem[0].description}</Table.Cell>
							<Table.Cell>
								<List bulleted>
									{beerItem[0].food_pairing.map(item => (
										<List.Item key={item.id}>{item}</List.Item>
									))
									}
								</List>                             
							</Table.Cell>
							<Table.Cell>{beerItem[0].brewers_tips}</Table.Cell>
							<Table.Cell>{beerItem[0].contributed_by}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Segment>
		</Container>
	);
}

export default BeerDetails;