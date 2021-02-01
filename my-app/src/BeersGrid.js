import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader, Message, Grid, /*Container, Segment, Dimmer*/ 
	//Segment,
	Container} from 'semantic-ui-react';
import GridComp from './GridComp';


function BeersGrid(props){
	const { foodPairingFilter }  = props;
	const [items, setBeerItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setError] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			const foodFilterParam = foodPairingFilter == '' ? foodPairingFilter : `&food=${foodPairingFilter}`;
			return fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=10${foodFilterParam}`)
				.then(data => data.json())
				.then(items => {
					setBeerItems(items);
					setIsLoaded(true);
				})
				.catch(error => setError(error));
		};
		fetchData();
	},[foodPairingFilter]);
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
		<Container style={{height: '100%'}}>
			<Grid columns={5} textAlign= "center" verticalAlign="middle">
				<Grid.Row stretched>
					<Grid.Column stretched>
						<GridComp beerItem={items[0]}/>
					</Grid.Column>
					<Grid.Column stretched>
						<GridComp beerItem={items[1]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[2]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[3]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[4]}/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row stretched>
					<Grid.Column  stretched>
						<GridComp beerItem={items[5]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[6]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[7]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[8]}/>
					</Grid.Column>
					<Grid.Column  stretched>
						<GridComp beerItem={items[9]}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}

const mapStateToProps = (state) => {
	const { foodPairingFilter } = state;
	return { foodPairingFilter };
};

export default connect(mapStateToProps)(BeersGrid);