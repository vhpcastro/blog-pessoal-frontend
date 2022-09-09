import { createStore } from 'redux';
import { TokenReducer } from './tokens/tokens-reducer';

const store = createStore(TokenReducer);

export default store;