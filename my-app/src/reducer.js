const initialState = {
	favorites: [],
	items : [],
};

const checkIfItemInFavorites = function(id, favorites){
	return favorites.some(function(item){
		return item.id === id;
	});
};

const getItem = ({item, rank}) =>  {
	return { id: item.id, name: item.name, image_url: item.image_url, rank:rank };
};

export default function appReducer(state = initialState, action){
	switch (action.type) {   
	case 'ADD_TO_FAVORITES' :
		return{
			...state,
			favorites: checkIfItemInFavorites(action.payload.id, state.favorites) ? state.favorites : [...state.favorites, action.payload]
		};
	case 'REMOVE_FROM_FAVORITES' :
		return{
			...state,
			favorites: state.favorites.filter(function(item){
				return item.id != action.payload.id;
			})
		};
	case 'UPDATE_BEER_RANK' :
		return{
			...state,
			favorites: state.favorites.map((favoriteItem) => favoriteItem.id == action.payload.item.id ? getItem(action.payload) : favoriteItem)
		};
	case 'UPDATE_ITEMS':
		return{
			...state,
			items: action.payload
		};
	case 'RESET_FAVORITES':
		return{
			...state,
			favorites : []
		};
	default:
		return state;
	}
}