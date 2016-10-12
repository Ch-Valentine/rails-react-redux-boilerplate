import { createStore, applyMiddleware, compose }  from 'redux';
import rootReducer                                from '../reducers';
import { thunk }                                  from '../middlewares';
import DevTools                                   from '../containers/DevTools';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
)(createStore);


export default function configureStore(initialState) {

  const store =  finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
