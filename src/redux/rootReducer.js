import {combineReducers} from "redux";
import postsReducer from "../api/posts/reducer";

const rootReducer=combineReducers({
    posts:postsReducer
});

export default rootReducer;