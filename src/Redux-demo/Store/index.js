import { combineReducers, createStore } from 'redux';
import { ProfileReducer, NotificationsReducer, ConnectionsReducer, GeneralReducer, UsersReducer, PostsReducer, NetworksReducer } from '../Reducers';

const rootReducer = combineReducers({
  Profile: ProfileReducer,
  Notifications: NotificationsReducer,
  Connections: ConnectionsReducer,
  General: GeneralReducer,
  Users: UsersReducer,
  Networks: NetworksReducer,
  Posts: PostsReducer
});

//// REDUX DATA PERSISTENT
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
////


const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store)
  return { store, persistor }
};

export default configureStore; ``