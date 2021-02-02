import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container} from 'semantic-ui-react';
import GridComp from './GridComp';

const columnsArray = (items, startIndex) => items.slice(startIndex, startIndex + 5).map(item => 
	<Grid.Column key={item.id}>
		<GridComp beerItem={item} />		
	</Grid.Column>
);


function BeersGrid(props){
	const { items, favorites, isFavoritesPage, offset } = props;
	const itemsToShow = isFavoritesPage ? favorites.slice((offset-1) * 10, (offset-1) * 10 + 10) : items;
	return (
		<Container>
			<Grid columns={5}>
				<Grid.Row>
					{columnsArray(itemsToShow, 0)}
				</Grid.Row>
				<Grid.Row>
					{columnsArray(itemsToShow, 5)}
				</Grid.Row>
			</Grid>
		</Container>
	);
}

const mapStateToProps = (state) => {
	const { items, favorites, offset } = state;
	return { items, favorites, offset };
};

export default connect(mapStateToProps)(BeersGrid);