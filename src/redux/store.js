import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cardRedux';
import userReducer from "./userRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({ // with this we combine our reecuder, in order to meke our all  reducer (userReducer and cardReducer) persisten
    user: userReducer,
    cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer); // in thsi line we write the reducer that we want to persist

// we create our store
export const store = configureStore({ // this part of the was different from the tutorial, I toke this part from -> https://stackoverflow.com/questions/70164034/redux-persist-typeerror-store-dispatch-is-not-a-function
    // we write our reducers 
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);


