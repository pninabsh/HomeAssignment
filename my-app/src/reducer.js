const initialState = {
	favorites: [],
	items : [],
	offset: 1
};

const checkIfItemInFavorites = function(id, favorites){
	return favorites.some(function(item){
		return item.id === id;
	});
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
	case 'UPDATE_OFFSET':
		return{
			...state,
			offset: action.payload
		};
	case 'UPDATE_BEER_RANK' :
		return{
			...state,
			favorites: state.favorites.map((favoriteItem) => favoriteItem.name == action.payload.name ? { name: action.payload.name, rank: action.payload.newRank } : favoriteItem)
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