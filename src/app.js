import React from 'react';
import ReactDOM from 'react-dom';
//import 'normalize.css/normalize.css';
//import './styles/styles.scss';
import Login from './components/Login';
import {BrowserRouter,Route} from 'react-router-dom';
import './firebase/firebase';

const App =()=>(
   <BrowserRouter>
       <Route path="/" component={Login}></Route>
   </BrowserRouter> 

);
ReactDOM.render(<App />, document.getElementById('app'));
