import React, { useState } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MenuComp() {
	const [activeItem, setActiveItem] = useState('');
	return (
		<Segment inverted>
			<Container>
				<Menu inverted>
					<Menu.Item
						name='BeerBuddy'
					/>
					<Menu.Item
						as={Link}
						to='/'
						name='Beers'
						active={activeItem === 'Beers'}
						onClick={() => setActiveItem('Beers')}
					/>
					<Menu.Item
						as={Link}
						to='/Favorites'
						name='Favorites'          
						active={activeItem === 'Favorites'}
						onClick={() => setActiveItem('Favorites')}
					/>
				</Menu>
			</Container>
		</Segment>
	);
}
  
export default MenuComp;