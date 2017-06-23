// sotre/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/index';

//const loggerMiddleware = createLogger({ predicate:(getState, action) => __DEV__});

//const counter = {count: 0 }

//const defaultStore = {counter};

/*
function configureStore(){
    
    //插入監聽程式，偵測Dispatch
    //Middleware lets you wrap the store's dispatch method for fun and profit.
    const enhancer = compose(
        applyMiddleware(loggerMiddleware)
    );
    const store = createStore(reducers,defaultStore,enhancer);

    if(module.hot){
        module.hot.accept(()=>{
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer)
        })
    }//end if
    return store
}

const Store = configureStore();
*/

const Store = createStore(reducers);

export default Store;