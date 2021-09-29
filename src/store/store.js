import {createStore } from 'redux';

// import React from 'react';
import cartReducer from './reducers';


const initialState = {

    cart:[
        {
            products: {
                "id": 1,
                "name": "White Cat",
                "price": 100,
                "image": "images/1.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
            quntity:3
        },
        {
            products: {
                "id": 2,
                "name": "Angry Cat",
                "price": 1000,
                "image": "images/2.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
            quntity:2
        },
        {
            products: {
                "id": 3,
                "name": "Bengal cat",
                "price": 2000,
                "image": "images/3.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                 },
            quntity:1
        },
        {
            products: {
                "id": 4,
                "name": "Persian cat",
                "price": 150,
                "image": "images/4.webp",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            quntity:4
        }
    ]

}


const Store = createStore(cartReducer,initialState);


export default Store; 