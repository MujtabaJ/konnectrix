import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { ProfileReducer, NotificationsReducer, ConnectionsReducer, GeneralReducer, NetworksReducer, PostsReducer } from '../Reducers';

const rootReducer = combineReducers({
  Profile: ProfileReducer,
  Notifications: NotificationsReducer,
  Connections: ConnectionsReducer,
  General: GeneralReducer,
  Networks: NetworksReducer,
  Posts: PostsReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store)
  return { store, persistor }
};

export default configureStore;