import logo from './logo.svg';
import './App.css';
import { Map } from '@esri/react-arcgis';
import { loadModules } from "esri-loader";
import $ from "jquery";
import  React from 'react';
import {useEffect} from 'react';

function App() {
  const elementRef = React.useRef(null);
  const handleMapLoad = function (map, view) {
    loadModules(["esri/widgets/Search"]).then(([Search]) => {
      const searchWidget = new Search({
        view: view,
        container: "searchWidget"
      });
    });
  };

  

  var myElement = $("<div id='searchWidget' class='esri-search esri-widget'><div role='presentation' class='esri-search__container'><div class='esri-search__input-container'><form class='esri-search__form' role='search'><input type='text' placeholder='Find address or place' aria-label='Search' autocomplete='off' class='esri-input esri-search__input' aria-autocomplete='list' aria-haspopup='true' aria-owns='searchWidget-suggest-menu' role='textbox' data-node-ref='_inputNode' title='Find address or place'></form><div id='searchWidget-suggest-menu' class='esri-menu esri-search__suggestions-menu' role='menu' data-node-ref='_suggestionListNode'><ul role='presentation' class='esri-menu__list esri-search__suggestions-list esri-search__suggestions-list--current-location'><li role='menuitem' class='esri-menu__list-item'><span aria-hidden='true' role='presentation' class='esri-icon-locate-circled'></span> Use current location</li></ul></div></div><button aria-label='Search' class='esri-search__submit-button esri-widget--button' title='Search'><span aria-hidden='true' role='presentation' class='esri-icon-search'></span></button><div class='esri-menu esri-search__warning-menu'><div class='esri-search__warning-body'><div><span aria-hidden='true' class='esri-icon-notice-triangle'></span><span class='esri-search__no-value-text'>Please enter a search term.</span></div></div></div></div></div>")[0];
  var observer = new MutationObserver(function(mutations) {
    if (document.contains(elementRef.current)) {
         let button = document.querySelector(".esri-search__submit-button");
         button.innerHTML = "Search";
         button.style.width = "50px";
         button.style.backgroundColor = "grey";
         button.style.color ="black";
         observer.disconnect();
     }
 });
 observer.observe(document, {attributes: true, childList: true, characterData: true, subtree:true});
 
  return (
    <div className="App">
       <div className="sidebar">
        <div className="search-container">
            <div id="searchWidget"  ref={elementRef}></div>
        </div>
      </div> 
      <div className="map" id = "viewDiv">
      <Map
      mapProperties={{ basemap: "streets-vector" }}
      viewProperties={{ center: [36, 33.4] , zoom: 7.5}}
      loaderOptions={{ version: "4.17", css: true }}
      onLoad={handleMapLoad}
    />
    </div>
    </div>
  );
}

export default App;
