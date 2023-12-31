import {API_KEY} from "./apikey.js";

//loads API Key to make it not visible in GitHub
function loadGoogleAPI(){
    var apiScript = document.createElement('script');
    apiScript.src="https://maps.googleapis.com/maps/api/js?key=" +API_KEY +"&libraries=places";
    apiScript.async = true;
    apiScript.defer = true;
    document.head.appendChild(apiScript);
}

loadGoogleAPI();

