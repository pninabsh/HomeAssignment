import React from 'react';
import { Segment, Image, Icon, Header,Button } from 'semantic-ui-react';

const onButtonClick = () => {

};

function GridComp(props){ 
	const { beerItem } = props;
	return (
		<div>
			{beerItem && <Segment style={{height: '320px'}}>
				<Button
					style={{ backgroundColor: 'Transparent', left: '70%', position:'absolute' }}
					circular
					onClick={onButtonClick()}
					icon='start outline'
				>
					<Icon name='star' size='large'/>
				</Button>
				<Button
					style={{ backgroundColor: 'Transparent', left: '5%', position:'absolute' }}
					circular
					onClick={() => window.open(`/beer/${beerItem.id}`, '_blank')}
				>
					<Icon name='info' size='large'/>
				</Button>
				<Image size='tiny' centered src={beerItem.image_url} style={{height: '220px'}}/> 
				<Header as='h3' textAlign='center'>
					<Header.Content>{beerItem.name}</Header.Content>
				</Header>
			</Segment> }
		</div>
	);
}

export default GridComp;