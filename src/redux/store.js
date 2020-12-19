import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const middleware = [];

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
    )
);

export default store;
