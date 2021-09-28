import {createStore } from 'redux';

// import React from 'react';
import cartReducer from './reducers';


const initialState = {

    cart:[
        
    ]

}


const Store = createStore(cartReducer,initialState);


export default Store; 