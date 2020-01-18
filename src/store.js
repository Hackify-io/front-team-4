import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = {};
let store;
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducers,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
