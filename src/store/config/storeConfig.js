import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from "../sagas/sagas";
import { rootReducer } from "../reducers/rootReducer";


export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools())

    return store;
}

export const createAppAsyncStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    )
    // We init (start) the Watcher Saga
    sagaMiddleware.run(watcherSaga);
    
    return store;
}