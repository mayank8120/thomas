import { createStore } from "redux";
import { rootreducer } from "../reducers";

import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootreducer, compose(applyMiddleware(thunk)));

export default store;