import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";


const sagaMiddleware=createSagaMiddleware();

const initialState={};

export const store=createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);