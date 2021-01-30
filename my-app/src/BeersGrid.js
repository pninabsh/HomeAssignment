import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader, Message, Grid, Image, /*Container, Segment, Dimmer*/ 
	//Segment,
	Container} from 'semantic-ui-react';

function BeersGrid(){
	const [items, setBeerItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setError] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			return fetch('https://api.punkapi.com/v2/beers?page=1&per_page=8')
				.then(data => data.json())
				.then(items => {
					setBeerItems(items);
					setIsLoaded(true);
				})
				.catch(error => setError(error));
		};
		fetchData();
	},[]);
	console.log(items);
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
			<Grid columns={4} relaxed divided textAlign= "center" verticalAlign="middle">
				<Grid.Row>
					<Grid.Column>
						<Image size='small' src={items[0].image_url} />
					</Grid.Column>
					<Grid.Column>
						<Image size='small' src={items[1].image_url} />
					</Grid.Column>
					<Grid.Column>
						<Image size='small' src={items[2].image_url} />
					</Grid.Column>
					<Grid.Column>
						<Image size='small' src={items[3].image_url} />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Image size='small' src={items[4].image_url} />
					</Grid.Column>
					<Grid.Column>
						<Image size='small' src={items[5].image_url} />
					</Grid.Column>
					<Grid.Column>
						<Image size='small' src={items[6].image_url} />
					</Grid.Column>
					<Grid.Column>
						<Image size='small' src={items[7].image_url} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}

export default connect()(BeersGrid);