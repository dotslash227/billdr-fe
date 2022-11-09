import React from "react";
import axios from "axios";
import {baseUrl} from "../config";

// Service method to fetch a list of users from the api
export function getAllUsers(callback){
    const requestUrl = baseUrl + "/users";
    axios.get(requestUrl).then((response)=>{
        return callback(null, response);
    }).catch((error)=>{
        return callback(error, null);
    });
}

// Service method to fetch a single user from the public api
export function getUser(userId, callback){
    const requestUrl = baseUrl + "/users/" + userId;
    axios.get(requestUrl).then((response)=>{
        return callback(null, response);
    }).catch((error)=>{
        return callback(error, null);
    });
};