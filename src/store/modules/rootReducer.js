import { combineReducers } from 'redux';

import config from './config/reducer';
import auth from './auth/reducer';
// import user from './user/reducer';

export default combineReducers({
    config,
    // user,
    auth,
});
