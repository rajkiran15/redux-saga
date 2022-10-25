import {FETCH_POSTS_SUCCESS} from "./enum";

const initialState={
    posts:[]
}

export default (state=initialState,action) => {
    switch(action.type){
        case FETCH_POSTS_SUCCESS:
            return {...state,posts:action.payload};
        default:
            return state;
    }
}