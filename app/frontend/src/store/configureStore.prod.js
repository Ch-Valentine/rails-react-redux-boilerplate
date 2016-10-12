import { createStore, applyMiddleware, compose }  from 'redux';
import rootReducer                                from '../reducers';
import { thunk }                                  from '../middlewares';


const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState); // store
}
