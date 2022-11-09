import React from "react";
import axios from "axios";
import {baseUrl} from "../config";

// Service method to enable any component to request the API for data;
function fetchCharacter(feature, callback){
    let requestUrl = baseUrl + "/fetch-characters/" + feature;
    axios.get(requestUrl).then(response => {
        return callback(null, response)
    }).catch((err)=>{
        return callback(err, null)
    })
}

export {fetchCharacter}