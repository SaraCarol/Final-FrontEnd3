export function reducer (state, action){
    switch (action.type) {
        case 'THEME_ACTION':
            return {...state, theme: state.theme === "light" ? "dark" : "light"};
        case 'DATA_ACTION':
            return {...state, data: action.payload};
        case 'FAVS_ACTION':
        return {...state, favs: [ ...state.favs, action.payload]};
    }
}