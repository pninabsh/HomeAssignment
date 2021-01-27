import { Menu, Icon, Segment, Container } from 'semantic-ui-react'
import { useState } from 'react';

function MenuComp() {
    const [activeItem, setActiveItem] = useState('home');
    return (
        <Segment inverted>
            <Container>
      <Menu inverted>
        <Menu.Item
          name='BeerBuddy'
        />
        <Menu.Item
          name='Browse Beers'
          active={activeItem === 'home'}
        />
        <Menu.Item
          name='Favorite Beers'          
          active={activeItem === 'messages'}
        >
            Favorite Beers   
            <Icon name='favorite'/>
        </Menu.Item>
      </Menu>
      </Container>
      </Segment>
    );
  }
  
  export default MenuComp;