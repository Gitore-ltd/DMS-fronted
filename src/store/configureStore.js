import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { initialState } from "./intialState";
import user from '../store/reducers/userReducer';
import products from '../store/reducers/productReducer';

const rootReducer = combineReducers({
    user,
    products,
    token: user
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