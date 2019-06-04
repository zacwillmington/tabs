// import { persistStore, persistReducer, autoMergeLevel2 } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from './Reducers/manageReducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxReset from 'redux-reset';

import logger from 'redux-logger'

// const persistConfig = {
// 	key: 'root',
// 	storage: storage,
// 	stateReconciler: autoMergeLevel2
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)


	// export let store = createStore(persistedReducer, compose(applyMiddleware(thunk, logger), reduxReset()));
	// export let persistor = persistStore(store);
	export let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger))); 