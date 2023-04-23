import {configureStore} from '@reduxjs/toolkit';
import counterRedux from './counterRedux';
import AuthRedux from './AuthRedux';
const store=configureStore({
    reducer:{conuter:counterRedux,auth:AuthRedux}
})


export default store;