import _ from 'lodash';
import React, {useState} from 'react';
import { Image, Icon ,Button, Dropdown, Card, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import BeerDetails from './BeerDetails';

const defaultImage = 'data:image/jpeg;base64,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';

const checkIfItemInFavorites = function(id, favorites){
	return favorites.some(function(item){
		return item.id === id;
	});
};

const getOptions = (number) =>
	_.times(number, (index) => ({
		key: index,
		text: `${index + 1}`,
		value: index + 1,
	}));

function GridComp(props){ 
	const { beerItem, favorites, addToFavorites, removeFromFavorites, isFavoritesPage, updateRank } = props;
	const [open, setOpen] = useState(false);
	const color = beerItem && checkIfItemInFavorites(beerItem.id, favorites) ? 'yellow' : 'white';
	return (
		<div>
			{beerItem && 
					<Modal
						onClose={() => setOpen(false)}
						onOpen={() => setOpen(true)}
						open={open}
						trigger={<Card>
							<Card.Content>
								<Button
									style={{ backgroundColor: 'Transparent', left: '70%', position:'absolute' }}
									circular
									onClick={() => color === 'yellow' ? removeFromFavorites(beerItem) : addToFavorites(beerItem)}
									icon='start outline'
								>
									<Icon name='star' size='large' color={color}/>
								</Button>
								{isFavoritesPage &&	<Dropdown
									style={{ left: '5%', position:'absolute' }}
									compact
									options={getOptions(5, '')}
									text={beerItem['rank']}
									onChange={(e) => updateRank(beerItem, e.target.innerText)}
									selection />}
								<Image size='tiny' centered src={beerItem.image_url? beerItem.image_url : defaultImage} style={{height: '220px'}}/> 
								<Card.Header>{beerItem.name}</Card.Header>
							</Card.Content>
						</Card>
						}>
						<Modal.Header>
							{beerItem.name} Beer
							<Icon name='bar' />
						</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								<BeerDetails id={beerItem.id} />
							</Modal.Description>
						</Modal.Content>
						<Modal.Actions>
							<Button color='black' onClick={() => setOpen(false)}>
          OK
							</Button>
						</Modal.Actions>
					</Modal>
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	const { favorites } = state;
	return { favorites };
};

const mapDispatchToProps = dispatch => ({
	addToFavorites: (item) => dispatch({type: 'ADD_TO_FAVORITES', payload: item}),	
	removeFromFavorites: (item) => dispatch({type: 'REMOVE_FROM_FAVORITES', payload: item})	,
	updateRank: (item, rank) => dispatch({type:'UPDATE_BEER_RANK', payload: { item, rank }})
});

export default connect(mapStateToProps, mapDispatchToProps)(GridComp);