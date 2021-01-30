const initialState = {
	favorites: []
};

export default function appReducer(state = initialState, action){
	switch (action.type) {   
	case 'ADD_TO_FAVORITES' :
		return{
			...state,
			favorites: [...state.favorites, action.payload]
		};
	case 'UPDATE_BEER_RANK' :
		return{
			...state,
			favorites: state.favorites.map((favoriteItem) => favoriteItem.name == action.payload.name ? { name: action.payload.name, rank: action.payload.newRank } : favoriteItem)
		};
	default:
		return state;
	}
}