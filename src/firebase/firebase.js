import * as firebase from 'firebase';
import React, { Component } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBAlDJzAJN3W3RdtUQvDkPTZwsV2gPzXMg",
    authDomain: "sample-8061d.firebaseapp.com",
    databaseURL: "https://sample-8061d.firebaseio.com",
    projectId: "sample-8061d",
    storageBucket: "sample-8061d.appspot.com",
    messagingSenderId: "788496279395",
    appId: "1:788496279395:web:6844a296966216c7c1d556"
  };

firebase.initializeApp(firebaseConfig);

const database=firebase.database();

export {firebase,database as default};