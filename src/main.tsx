import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./Styles2.css";

 ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
 
    
  </React.StrictMode>
 )
 if('serviceWorker' in navigator){
  window.addEventListener('load', () =>{
  navigator.serviceWorker.register('/sw.js')
  .then(reg =>
    console.log("Service worker Registered:", reg))
    .catch(err =>
      console.log("Service worker Registration failed:",err))
  })
   }

