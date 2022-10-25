import {put,takeLatest,all} from "redux-saga/effects";
import { FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILED,FETCH_POSTS } from "./enum";
import {api} from "../";

function* getPots(){
    try{
        const data=yield api.get("https://jsonplaceholder.typicode.com/posts/");
        yield put({
            type:FETCH_POSTS_SUCCESS,
            payload:data
        });
    }catch(err){
        yield put({
             type:FETCH_POSTS_FAILED
        });
    }
}

export default function* root() {
    yield all([
         takeLatest(FETCH_POSTS,getPots)
    ]);
}
