import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import SystemReducer from "./reducers/system";
import UserReducer from "./reducers/user";

const rootReducer = combineReducers({
  system: SystemReducer,
  user: UserReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: rootReducer });
export default store;
