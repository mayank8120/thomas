import { FETCH_PROPS } from '../constants/constants.js'




const mapInitState = true;
export const search_result = (posts = [], action) => {
    switch (action.type) {
        case FETCH_PROPS:
            return action.payload;
        default:
            return posts;
    }
};




export const changeMapState = (state = mapInitState, action) => {
    switch (action.type) {
        case 'MAP_STATE':
            return !state;
        default:
            return state;
    }
}


const mapInitZoom = 10;
export const changeMapZoom = (state = mapInitZoom, action) => {
    switch (action.type) {
        case 'MAP_ZOOM':
            return action.payload;
        default:
            return state;
    }
}
