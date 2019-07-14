const initState = {
    posts: [
	    { id:'1', title:'One', body:'one text' },
	    { id:'2', title:'Two', body:'two text' },
        { id: '3', title: 'Three', body: 'three text' },
        { id: '4', title: 'Four', body: 'four text' },
        { id: '5', title: 'Five', body: 'five text' },
        { id: '6', title: 'Six', body: 'Six text. Line 2.!' }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
	let newPosts = state.posts.filter(post => post.id != action.id);
	return {
	    ...state,
	    posts: newPosts
	}
    }
    return state;
}

export default rootReducer
