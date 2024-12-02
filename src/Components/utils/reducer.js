export function reducer (state, action){
    switch (action.type) {
        case 'THEME_ACTION':
            return {};
        case 'DATA_ACTION':
            return {...state, data: action.payload};
    }
}