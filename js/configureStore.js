import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware'
// import devTools from 'remote-redux-devtools';

import reducer from './reducer';


export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(promise(), thunk),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}