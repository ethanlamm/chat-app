import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducers
import appReducer from './slices/app'


// 整体存储
const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'ChatApp-' // 默认前缀为 persist:
    // 不写whitelist，默认存储全部reducer
}

const persistedReducer = persistReducer(
    rootPersistConfig,
    combineReducers({
        app: appReducer
    })
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        }),
})

export const persistor = persistStore(store)