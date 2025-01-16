import { createStore } from "redux"

const initialState = {
	isDarkMode: false
};


const themeReducer = (state = initialState, action) => {
	if (action.type === "Toggle_Theme") {
		return {
			...state,
			isDarkMode: !state.isDarkMode
		};
	}

	return state;
};

export const store = createStore(themeReducer);
