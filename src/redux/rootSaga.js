import {all,fork} from "redux-saga/effects";
import postsSaga from "../api/posts/saga";

export default function* root() {
    yield all([
        fork(postsSaga)
    ]);
}