import {
  createStore as RNCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import {themeReducer} from './reducers/theme';

export const createStore = () => {
  /* Later add Asyncstore for reading theme to load, then set initial state of the app */

  const reducers = combineReducers({theme: themeReducer});
  return RNCreateStore(reducers, applyMiddleware(ReduxThunk));
};
