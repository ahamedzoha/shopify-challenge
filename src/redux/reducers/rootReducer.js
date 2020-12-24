import { combineReducers } from "redux";

import nominationReducer from "./nominationReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["nominations"],
};
const rootReducer = combineReducers({
  nominations: nominationReducer,
});

export default persistReducer(persistConfig, rootReducer);
