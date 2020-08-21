import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { initialState } from "./intialState";
import userReducer from '../store/reducers/userReducer';

const rootReducer = combineReducers({
    userReducer
});

export default function configureStore() {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(ReduxThunk, reduxImmutableStateInvariant())
        )
    );
}