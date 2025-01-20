import { configureStore } from "@reduxjs/toolkit";
import {reducers} from './reducers/Index'


const store = configureStore({
    reducer: reducers
})

export {store};