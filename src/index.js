import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";

var myElement = $("<button aria-label='Search' class='esri-search__submit-button esri-widget--button' title='Search'></button>")[0];
var observer = new MutationObserver(function(mutations) {
  if (document.contains(myElement)) {
       console.log("It's in the DOM!");
       let button = document.querySelector(".esri-widget--button");
       button.innerHTML = "Search";
       observer.disconnect();
   }
});
observer.observe(document, {attributes: true, childList: true, characterData: true, subtree:true});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
