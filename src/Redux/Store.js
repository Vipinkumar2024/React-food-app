import { configureStore } from '@reduxjs/toolkit';

import CardSlice from './Slice/CardSlice';  
import  SearchSlice  from './Slice/SearchSlice';

const store = configureStore({
  reducer: {
    cart: CardSlice, 
     search:SearchSlice
  },
});

export default store;
