import  {createStore,applyMiddleware,compose} from 'redux'
import Reduxcer from './reduxcer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reduxcer, /* preloadedState, */ composeEnhancers(
    //  const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(thunk)
));
export default store