import React from 'react';
import { connect } from 'react-redux';
import { Grid, /*Container, Segment, Dimmer*/ 
	//Segment,
	Container} from 'semantic-ui-react';
import GridComp from './GridComp';


function BeersGrid(props){
	const { items } = props;
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
	const { items } = state;
	return { items };
};

export default connect(mapStateToProps)(BeersGrid);