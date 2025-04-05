import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice"; // ✅ Ensure correct path
import gameReducer from "./slices/gameSlice"; // ✅ Ensure correct path

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth"], // ✅ Only persist the auth state
};

const rootReducer = combineReducers({
    auth: authReducer, // ✅ Persisted
    games: gameReducer, // ❌ Not persisted (modify whitelist if needed)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
