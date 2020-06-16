import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'

// const store  = createStore(reducers,applyMiddleware(thunk))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    //  const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(thunk)
));
export default store