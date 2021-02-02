import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container} from 'semantic-ui-react';
import GridComp from './GridComp';

const columnsArray = (items, startIndex, isFavoritesPage) => items.slice(startIndex, startIndex + 5).map(item => 
	<Grid.Column key={item.id}>
		<GridComp beerItem={item} isFavoritesPage={isFavoritesPage}/>		
	</Grid.Column>
);


function BeersGrid(props){
	const { items, favorites, isFavoritesPage, favoritesOffset } = props;
	const itemsToShow = isFavoritesPage ? favorites.slice((favoritesOffset-1) * 10, (favoritesOffset-1) * 10 + 10) : items;
	return (
		<Container>
			<Grid columns={5}>
				<Grid.Row>
					{columnsArray(itemsToShow, 0, isFavoritesPage)}
				</Grid.Row>
				<Grid.Row>
					{columnsArray(itemsToShow, 5, isFavoritesPage)}
				</Grid.Row>
			</Grid>
		</Container>
	);
}

const mapStateToProps = (state) => {
	const { items, favorites } = state;
	return { items, favorites };
};

export default connect(mapStateToProps)(BeersGrid);